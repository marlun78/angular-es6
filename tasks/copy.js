'use strict';

module.exports = function module(gulp, config) {
    function taks() {
        return gulp.src('./node_modules/angular/angular.js')
            .pipe(gulp.dest(config.distDir + '/js'));
    }
    task.waitFor = ['clean'];
    return task;
};
