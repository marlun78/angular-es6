'use strict';

var $del = require('del');

module.exports = function (gulp, config) {
    task.waitFor = config.dependencies.clean;
    function task(next) {
        $del([config.distDir], next);
    }
    return task;
};