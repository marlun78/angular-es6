'use strict';

module.exports = function module(gulp, config) {
    var files = './node_modules/angular/angular.js';
    task.waitFor = ['clean'];
    function taks() {
        return gulp.src(files)
            .pipe(gulp.dest(config.distDir + '/js'));
    }
    return task;
};
