'use strict';

module.exports = function (gulp, config) {
    task.waitFor = config.dependencies.watch;
    function task() {
        gulp.watch(config.appDir + '**/*.js', ['scripts']);
        gulp.watch(config.appDir + '**/*.styl', ['stylus']);
        gulp.watch(config.appDir + 'index.html', ['html']);
    }
    return task;
};