'use strict';

var $connect = require('gulp-connect');

module.exports = function (gulp, config) {
    function task() {
        return $connect.server({
            root: config.distDir,
            port: 3000,
            livereload: true
        });
    }
    task.waitFor = ['clean'];
    return task;
};
