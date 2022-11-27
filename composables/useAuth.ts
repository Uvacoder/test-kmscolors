import { GetUserByMailQuery, LoginMutation } from "#gql";

export type AuthData = LoginMutation["auth_login"] & {
	currentUser?: GetUserByMailQuery["users"][number];
};

class AuthService {
	private refreshTokenCookie = useCookie("__rftkn", {
		sameSite: "strict",
		secure: true,
	});
	private authTokenCookie = useCookie("__autkn", {
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

	public async sendLoginRequest(email: string, password: string) {
		try {
			let res = await GqlLogin({ email: email, password: password });
			this.data.value = { ...res.auth_login };
			await this.fetchUser(email);
			useGqlToken(res.auth_login?.access_token!);
			this.authTokenCookie.value = res.auth_login?.access_token!;
			this.refreshTokenCookie.value = res.auth_login?.refresh_token!;
			this.lastUserCookie.value = this.user?.email!;
			navigateTo("/app");
			console.log(this.data.value.refresh_token);
		} catch (err: any) {
			this.resetFields();
			console.error(err?.["gqlErrors"][0].message ?? err);
		}
	}

	public async tryContinueSession() {
		if (
			this.refreshTokenCookie.value != null &&
			this.lastUserCookie.value != null &&
			this.authTokenCookie.value != null
		) {
			useGqlToken(this.authTokenCookie.value);
			await this.sendRefreshRequest(this.refreshTokenCookie.value);
		}
	}

	private async fetchUser(email: string) {
		let res = await GqlGetUserByMail({ email: email });
		this.data.value.currentUser = { ...res.users?.[0] };
	}

	private async sendRefreshRequest(refreshToken: string) {
		try {
			console.log("REFRESHING");
			let res = await GqlRefreshToken({
				refresh_token: refreshToken,
			});
			console.log(this.refreshTokenCookie.value);
			console.log("OLD", this.data.value.access_token);
			console.log("NEW", res.auth_refresh?.access_token);
			this.data.value = { ...res.auth_refresh };
			await this.fetchUser(this.lastUserCookie.value!);
			this.refreshTokenCookie.value = res.auth_refresh?.refresh_token!;
		} catch (err: any) {
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
				console.log(res);
				this.resetFields();
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
	useCookie("token", { sameSite: "strict" });
	return new AuthService();
};
