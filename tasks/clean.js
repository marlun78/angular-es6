'use strict';

var clean = require('gulp-clean');

module.exports = function (gulp, config) {
    return function cleanTask() {
        return gulp.src(config.distDir + '**/*')
            .pipe(clean());
    };
};