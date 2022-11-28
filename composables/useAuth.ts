import { GetUserByMailQuery, LoginMutation } from "#gql";

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
	public lastFailedNavigation = useState<string>();

	public attemptingRestore = useState<boolean>("restoreState", () => false);

	private setCookies(refresh_token: string | null, email: string | null) {
		this.refreshTokenCookie.value = refresh_token;
		this.lastUserCookie.value = email;
	}

	public async sendLoginRequest(email: string, password: string) {
		try {
			let res = await GqlLogin({ email: email, password: password });
			this.data.value = { ...res.auth_login };
			await this.fetchUser(email);
			useGqlToken(res.auth_login?.access_token!);
			this.setCookies(res.auth_login?.refresh_token!, this.user?.email!);
			navigateTo("/app");
		} catch (err: any) {
			this.resetFields();
			console.error(err?.["gqlErrors"][0].message ?? err);
		}
	}

	public async tryContinueSession() {
		if (
			this.refreshTokenCookie.value != null &&
			this.lastUserCookie.value != null
		) {
			this.attemptingRestore.value = true;
			await this.sendRefreshRequest(this.refreshTokenCookie.value);
		}
	}

	private async fetchUser(email: string) {
		let res = await GqlGetUserByMail({ email: email });
		this.data.value.currentUser = { ...res.users?.[0] };
	}

	private async sendRefreshRequest(refreshToken: string) {
		try {
			let res = await GqlRefreshToken({
				refresh_token: refreshToken,
			});
			this.data.value = { ...res.auth_refresh };
			await this.fetchUser(this.lastUserCookie.value!);
			this.setCookies(res.auth_refresh?.refresh_token!, this.user?.email!);
			this.attemptingRestore.value = false;
			useGqlToken(res.auth_refresh?.access_token!);
			this.refreshTokenCookie.value = res.auth_refresh?.refresh_token!;
			console.log(this.lastFailedNavigation.value);
			navigateTo(this.lastFailedNavigation.value)
		} catch (err: any) {
			this.attemptingRestore.value = false;
			this.resetFields();
			this.setCookies(null, null);
			useGqlToken(null);
			console.log(err);
		}
	}

	public get user() {
		return this.data.value?.currentUser;
	}

	public get isLoggedIn() {
		return this.data.value?.access_token != undefined;
	}

	public async sendLogoutRequest() {
		if (this.data.value.access_token) {
			let res = await GqlLogout({ token: this.data.value.access_token });
			if (res.auth_logout) {
				this.resetFields();
				this.setCookies(null, null);
				useGqlToken(null);
			} else {
				console.error("Error while logging out");
			}
		}
	}

	private resetFields() {
		this.data.value.access_token = undefined;
		this.data.value.currentUser = undefined;
		this.data.value.expires = undefined;
		this.data.value.refresh_token = undefined;
	}
}
export const useAuth = () => {
	return new AuthService();
};
