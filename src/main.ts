import ModuleBase from './modules/ModuleBase'
import './style.scss'

const moduleList: ModuleBase[] = [];

moduleList.forEach(module => {
  module.initiate();
});