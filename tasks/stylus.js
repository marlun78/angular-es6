'use strict';

var connect = require('gulp-connect');
var sourcemaps = require('gulp-sourcemaps');
var stylus = require('gulp-stylus');

module.exports = function (gulp, config) {
    return function () {
        gulp.src(config.appDir + 'css/main.styl')
            .pipe(sourcemaps.init())
            .pipe(stylus({ compress: !config.isDebug }))
            .pipe(sourcemaps.write())
            .pipe(gulp.dest(config.distDir + 'css/'))
            .pipe(connect.reload());
    };
};