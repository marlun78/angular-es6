'use strict';

module.exports = function (gulp, config) {
    var files = './node_modules/angular/angular.js';
    task.waitFor = config.dependencies.copy;
    function task() {
        return gulp.src(files)
            .pipe(gulp.dest(config.distDir + '/js'));
    }
    return task;
};