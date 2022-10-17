import ModuleBase from "./ModuleBase";

export default class AuthModule implements ModuleBase {
    public async initiate() {
        console.log("Auth Init");
    }
}