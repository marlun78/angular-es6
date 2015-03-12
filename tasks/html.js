'use strict';

var $connect = require('gulp-connect');

module.exports = function (gulp, config) {
    function task() {
        return gulp.src(config.appDir + 'index.html')
            .pipe(gulp.dest(config.distDir))
            .pipe($connect.reload());
    };
    task.waitFor = ['clean'];
    return task;
};
