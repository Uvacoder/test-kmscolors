import AuthModule from "./modules/Auth";
import ModuleBase from "./modules/ModuleBase";
import "./scss/style.scss";

const moduleList: ModuleBase[] = [new AuthModule()];

moduleList.forEach(async (module) => {
	await module.initiate();
});

function getModule<T>(): ModuleBase | undefined {
	return moduleList.find((m) => m instanceof T);
}
