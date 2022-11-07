
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
		const data = (await useAsyncData(() => GqlGetUserByUsername()))
			.data.value?.appusers as UserType[];
		return data;
	}
	public checkLogin(username: string, password: string) {
		
	}
	public createUser(username: string, password: string) {

	}
}
