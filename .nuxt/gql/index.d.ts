import { getSdk as defaultGqlSdk } from '#gql/default'
export { Appusers_Filter, Date_Filter_Operators, Datetime_Function_Filter_Operators, Hash_Filter_Operators, Number_Filter_Operators, String_Filter_Operators, GetUserByIdQueryVariables, GetUserByIdQuery } from "#gql/default";
declare module '#gql' {
  type GqlClients = 'default'
  type GqlOps = 'getUserById'
  const GqClientOps = {}
  const GqlSdks = {
    default: defaultGqlSdk,
  }
  export const GqlGetUserById: (...params: Parameters<GqlSdkFuncs['getUserById']>) => ReturnType<GqlSdkFuncs['getUserById']>
  type GqlSdkFuncs = ReturnType<typeof defaultGqlSdk>
}