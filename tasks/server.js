'use strict';

var $connect = require('gulp-connect');

module.exports = function (gulp, config) {
    var options = {
        root: config.distDir,
        port: 3000,
        livereload: true
    };
    
    function task() {
        return $connect.server(options);
    }
    
    return task;
};
