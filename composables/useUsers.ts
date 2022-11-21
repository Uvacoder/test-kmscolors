import { GetUserByUsernameQuery, LoginQuery } from "#gql";
import { sha3_256 } from "js-sha3";
import { TypeFromQuery } from "~~/helper/typeFromArray";

export type UserType = GetUserByUsernameQuery['appusers'];

export const useUsers = async () => {
	return new UserService();
};

class UserService {
	constructor() { }
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
				GqlLogin({ username: username, password: sha3_256(password) })
			)
		).data.value?.appusers;
		console.log(data);

		return Array.isArray(data) && data.length > 0 ? true : false;
	}
	public createUser(username: string, password: string) { }
}
