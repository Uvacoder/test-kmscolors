import { GetUserByMailQuery, LoginMutation } from "#gql";
import { restoreBlacklistRoutes } from "~~/helper/autoRedirectAfterRestore";

export type AuthData = LoginMutation["auth_login"] & {
	currentUser?: GetUserByMailQuery["users"][number];
};

class AuthService {
	private refreshTokenCookie = useCookie("__rftkn", {
		sameSite: "strict",
		secure: true,
	});

	private lastUserCookie = useCookie("__lusrc", {
		sameSite: "strict",
		secure: true,
	});

	private data = useState<AuthData>("authData", () => {
		return {};
	});
	public loginHasFailed = useState<boolean>("lhf", () => false);
	private setLoginHasFailed(status:boolean){
		this.loginHasFailed.value = status;
		setTimeout(() => {
			this.loginHasFailed.value = false;
		},5000)

	}
	public lastFailedNavigation = useCookie("__lfrc", {
		sameSite: "strict",
		secure: true,
	});

	public attemptingRestore = useState<boolean>("restoreState", () => false);

	/**
	 * Sets the cookies
	 * @param refresh_token
	 * @param email
	 */
	private setCookies(refresh_token: string | null, email: string | null) {
		this.refreshTokenCookie.value = refresh_token;
		this.lastUserCookie.value = email;
	}

	/**
	 * tries to log-in using given credentials
	 * @param {string} email - directus e-mail
	 * @param {string} password - directus password
	 */
	public async sendLoginRequest(email: string, password: string) {
		if (email && password) {
			this.setCookies(null, null);
			try {
				let res = await GqlLogin({ email: email, password: password },{"Cache-Control":"no-store"});
				this.data.value = { ...res.auth_login };
				await this.fetchUser(email);
				this.setLoginHasFailed(false);
				this.setCookies(res.auth_login?.refresh_token!, this.user?.email!);
				navigateTo(this.lastFailedNavigation.value ?? "/app");
			} catch (err: any) {
				this.setLoginHasFailed(true);
				this.resetFields();
				console.error(err?.["gqlErrors"][0].message ?? err);
			}
		}
	}

	/**
	 * Sends a refresh request if cookies are set
	 */
	public async tryContinueSession() {
		if (
			this.refreshTokenCookie.value != null &&
			this.lastUserCookie.value != null
		) {
			this.attemptingRestore.value = true;
			await this.sendRefreshRequest(this.refreshTokenCookie.value);
		}
	}

	/**
	 * Fetches user by email
	 * @param {string} email
	 */
	private async fetchUser(email: string) {
		let res = await GqlGetUserByMail({ email: email });
		this.data.value.currentUser = { ...res.users?.[0] };
	}

	/**
	 * refreshes an access token using a refresh token
	 * @param {string} refreshToken
	 */
	private async sendRefreshRequest(refreshToken: string) {
		try {
			let res = await GqlRefreshToken({
				refresh_token: refreshToken,
			});
			this.data.value = { ...res.auth_refresh };
			await this.fetchUser(this.lastUserCookie.value!);
			this.setCookies(res.auth_refresh?.refresh_token!, this.user?.email!);
			this.attemptingRestore.value = false;
			this.refreshTokenCookie.value = res.auth_refresh?.refresh_token!;
			if (this.lastFailedNavigation.value!!) {
				navigateTo(this.lastFailedNavigation.value);
			}
			if (restoreBlacklistRoutes.includes(useRoute().path)) {
				navigateTo("/");
			}
		} catch (err: any) {
			this.attemptingRestore.value = false;
			this.resetFields();
			this.setCookies(null, null);
			console.log(err);
		}
		this.lastFailedNavigation.value = null;
	}

	/**
	 * Gets the current user
	 */
	public get user() {
		return this.data.value?.currentUser;
	}

	/**
	 * Checks the login status
	 */
	public get isLoggedIn() {
		return this.data.value?.access_token != undefined;
	}

	/**
	 * Sends a logout request
	 */
	public async sendLogoutRequest() {
		if (this.data.value.access_token) {
			let res = await GqlLogout({ token: this.data.value.access_token });
			if (res.auth_logout) {
				this.resetFields();
				this.setCookies(null, null);
			} else {
				console.error("Error while logging out");
			}
		}
	}

	/**
	 * resets the auth state
	 */
	private resetFields() {
		this.data.value.access_token = undefined;
		this.data.value.currentUser = undefined;
		this.data.value.expires = undefined;
		this.data.value.refresh_token = undefined;
	}
}

/**
 * Provides basic authentication functionalities
 * @returns a shared instance of AuthService
 */
export const useAuth = () => {
	return new AuthService();
};
