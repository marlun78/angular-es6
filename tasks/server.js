'use strict';

var connect = require('gulp-connect');

module.exports = function (gulp, config) {
    return function () {
        connect.server({
            root: config.distDir,
            port: 3000,
            livereload: true
        })
    };
};