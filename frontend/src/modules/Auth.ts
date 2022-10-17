import ModuleBase from "./ModuleBase";

export default class AuthModule implements ModuleBase {
	public static testString: string = "ee";
	public async initiate() {
		console.log("Auth Init");
		throw new Error("Bigoof");
	}
}
