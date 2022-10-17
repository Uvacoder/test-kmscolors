import AuthModule from "./modules/Auth";
import ModuleBase from "./modules/ModuleBase";
import "./scss/style.scss";

const moduleList: ModuleBase[] = [new AuthModule()];

moduleList.forEach(async (module) => {
	await module
		.initiate()
		.catch((err) => console.log(err))
		.then();
});

function getModule(type): ModuleBase | undefined {
	return moduleList.find((m) => m instanceof type);
}
