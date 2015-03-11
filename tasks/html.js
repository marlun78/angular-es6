'use strict';

var connect = require('gulp-connect');

module.exports = function (gulp, config) {
    return function () {
        gulp.src(config.appDir + 'index.html')
            .pipe(gulp.dest(config.distDir))
            .pipe(connect.reload());
    };
};