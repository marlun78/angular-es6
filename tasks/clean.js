'use strict';

var $del = require('del');

module.exports = function (gulp, config) {
    function task(next) {
        $del([config.distDir], next);
    }
    return task;
};