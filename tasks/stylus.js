'use strict';

var $connect = require('gulp-connect');
var $sourcemaps = require('gulp-sourcemaps');
var $stylus = require('gulp-stylus');

module.exports = function module(gulp, config) {
    var options = { 
        compress: !config.isDebug
    };
    task.waitFor = ['clean'];
    function task() {
        return gulp.src(config.appDir + 'css/main.styl')
            .pipe($sourcemaps.init())
            .pipe($stylus(options))
            .pipe($sourcemaps.write())
            .pipe(gulp.dest(config.distDir + 'css/'))
            .pipe($connect.reload());
    }
    return task;
};
