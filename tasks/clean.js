'use strict';

var $clean = require('gulp-clean');

module.exports = function module(gulp, config) {
    function task() {
        return gulp.src(config.distDir + '**/*')
            .pipe($clean());
    }
    return task;
};
