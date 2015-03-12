'use strict';

var $clean = require('gulp-clean');

module.exports = function module(gulp, config) {
    var files = config.distDir + '**/*';
    function task() {
        return gulp.src(files)
            .pipe($clean());
    }
    return task;
};
