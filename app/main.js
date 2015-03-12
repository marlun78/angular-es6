// main.js
import { ApplicationController } from './core/ApplicationController';
// Is: import * as x from 'x' syntax supported by Traceur?
import * as button from './components/button/index';

angular.module('app', [button.name])
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
