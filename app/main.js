// main.js
import { ApplicationController } from './core/ApplicationController';
import { buttonModuleNs } from './components/button/index';

angular.module('app', [
    buttonModuleNs
])
    .directive('appRoot', appRootDirective)
    .run(initialize);

function appRootDirective() {
    return {
        controller: ApplicationController,
        controllerAs: 'root'
    };
}

function initialize() {
    console.log('Application initialize');
}