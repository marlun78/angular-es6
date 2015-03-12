'use strict';

// Finds `templateUrl`-properties and replaces it with an `template`-property
// with the HTML inlined.

var $through = require('through2');
var $gutil = require('gulp-util');
var $fs = require('fs');
var $path = require('path');
var $escape = require('js-string-escape');

var templateUrlPattern = /templateUrl(\s*:\s*)['"]([^'"]+)['"]/g;

module.exports = function (config) {
    return function inline(file) {
        function replacer(match, colon, viewPath) {
            var scriptPathFromRoot = $path.relative(config.root, file);
            var viewPathFromRoot = $path.join(config.appDir, viewPath);
            $gutil.log('Inlining', viewPath, 'in', scriptPathFromRoot);

            var html = $fs.readFileSync(viewPathFromRoot, 'utf8');
            var escaped = $escape(html);
            return 'template' + colon + "'" + escaped + "'";
        }
        return $through(function (buf, enc, next) {
            this.push(buf.toString('utf8').replace(templateUrlPattern,
                replacer));
            next();
        });
    };
};
