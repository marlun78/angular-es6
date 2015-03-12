'use strict';

var $connect = require('gulp-connect');

module.exports = function (gulp, config) {
    task.waitFor = config.buildStep1;
    function task() {
        return gulp.src(config.appDir + 'index.html')
            .pipe(gulp.dest(config.distDir))
            .pipe($connect.reload());
    }
    return task;
};