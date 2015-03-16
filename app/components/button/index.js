import * as buttonDirective from './buttonDirective';

export const name = 'app.components.button';

angular.module(name, [])
    .directive(buttonDirective.name, buttonDirective.fn);
