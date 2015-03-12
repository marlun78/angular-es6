'use strict';

var $connect = require('gulp-connect');

module.exports = function (gulp, config) {
    task.waitFor = config.buildStep2;
    function task() {
        return $connect.server({
            root: config.distDir,
            port: 3000,
            livereload: true
        });
    }
    return task;
};