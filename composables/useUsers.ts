import { GetUserByUsernameQuery } from "#gql";
import { TypeFromQuery } from "~~/helper/typeFromArray";
7;
export type UserType = TypeFromQuery<GetUserByUsernameQuery["appusers"]>;

export const useUsers = async () => {
	return new UserService();
};

class UserService {
	constructor() {}
	public async getUser(username: string): Promise<UserType[]> {
		const data = (
			await useAsyncData(() => GqlGetUserByUsername({ username: username }))
		).data.value?.appusers as UserType[];
		return data;
	}
	public async checkLogin(
		username: string,
		password: string
	): Promise<boolean> {
		const data = (
			await useAsyncData(() =>
				GqlLogin({ username: username, password: password })
			)
		).data.value?.appusers as UserType[];

		return Array.isArray(data) ? true : false;
	}
	public createUser(username: string, password: string) {}
}
