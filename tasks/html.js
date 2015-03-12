'use strict';

var $connect = require('gulp-connect');

module.exports = function module(gulp, config) {
    var files = config.appDir + 'index.html';
    
    task.waitFor = ['clean'];
    function task() {
        return gulp.src(files)
            .pipe(gulp.dest(config.distDir))
            .pipe($connect.reload());
    }
    
    return task;
};
