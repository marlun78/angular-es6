'use strict';

var $jshint = require('gulp-jshint');

module.exports = function (gulp, config) {
    function task() {
        return gulp.src([config.appDir + '/**/*.js'])
            .pipe($jshint('.jshintrc'))
            .pipe($jshint.reporter('jshint-stylish'));
    }
    return task;
};