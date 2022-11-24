import { GetUserByMailQuery } from "#gql";

export type AuthData = {
	currentUser?: GetUserByMailQuery["users"][number];
	accessToken?: string;
	refreshToken?: string;
	tokenExpiration?: number;
};

class AuthService {
	private data = useState<AuthData>("authData", () => {return {} });
	public async sendLoginRequest(email: string, password: string) {
		try {
			let res = await GqlLogin({ email: email, password: password });

			this.data.value = {
				accessToken: res.auth_login?.access_token!,
                refreshToken: res.auth_login?.refresh_token!,
                tokenExpiration: res.auth_login?.expires!,
                currentUser: (await GqlGetUserByMail({ email: email })).users?.[0]
			};

			console.log(this);

		} catch (err: any) {
			this.resetFields();
			console.error(err?.["gqlErrors"][0].message ?? err);
		}
	}

    public get user(){
        return this.data.value?.currentUser;
    }
    public get isLoggedIn(){
        return this.data.value?.accessToken != undefined;
    }
	public async sendLogoutRequest() {
		if (this.data.value.accessToken) {
			let res = await GqlLogout({ token: this.data.value.accessToken });
			if (res.auth_logout) {
				console.log(res);
				this.resetFields();
			} else {
				console.error("Error while logging out");
			}
		}
	}
	private resetFields() {
		this.data.value.accessToken = undefined;
		this.data.value.currentUser = undefined;
		this.data.value.tokenExpiration = undefined;
		this.data.value.refreshToken = undefined;
	}
}
export const useAuth = () => {
    useCookie("token", {sameSite: "strict"})
	return new AuthService();
};
