'use strict';

var $connect = require('gulp-connect');
var $sourceMaps = require('gulp-sourcemaps');
var $stylus = require('gulp-stylus');

module.exports = function (gulp, config) {
    var options = { 
        compress: !config.isDebug
    };
    task.waitFor = config.buildStep1;
    function task() {
        return gulp.src(config.appDir + 'css/main.styl')
            .pipe($sourceMaps.init())
            .pipe($stylus(options))
            .pipe($sourceMaps.write())
            .pipe(gulp.dest(config.distDir + 'css/'))
            .pipe($connect.reload());
    }
    return task;
};