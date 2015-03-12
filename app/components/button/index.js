import * as directive from './buttonDirective';

export const name = 'app.components.button';

angular.module(name, [])
    .directive(directive.name, directive.fn);
