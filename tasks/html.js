'use strict';

var $connect = require('gulp-connect');

module.exports = function module(gulp, config) {
    task.waitFor = ['clean'];
    function task() {
        return gulp.src(config.appDir + 'index.html')
            .pipe(gulp.dest(config.distDir))
            .pipe($connect.reload());
    }
    return task;
};
