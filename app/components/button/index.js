import { buttonDirectiveName, buttonDirectiveFunction } from './buttonDirective';
export const buttonModuleNs = 'app.components.button';
angular.module(buttonModuleNs, [])
    .directive(buttonDirectiveName, buttonDirectiveFunction);
