import ModuleBase from './modules/ModuleBase'
import './scss/style.scss'

const moduleList: ModuleBase[] = [];

moduleList.forEach(module => {
  module.initiate();
});