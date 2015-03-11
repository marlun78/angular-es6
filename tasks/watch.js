'use strict';

module.exports = function (gulp, config) {
    return function () {
        gulp.watch(config.appDir + '**/*.js', ['scripts']);
        gulp.watch(config.appDir + '**/*.styl', ['stylus']);
        gulp.watch(config.appDir + 'index.html', ['html']);
    };
};