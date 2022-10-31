import { GetUserByIdQuery } from "#gql";
import { TypeFromQuery } from "~~/helper/typeFromArray";
7;
export type UserType = TypeFromQuery<GetUserByIdQuery["appusers"]>;

export const useUsers = async () => {
	const data = (await useAsyncData(() => GqlGetUserById({id: "Udo"}))).data.value?.appusers;
	return data;
};
	