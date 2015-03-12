'use strict';

var $browserify = require('browserify');
var $connect = require('gulp-connect');
var $es6ify = require('es6ify');
var $gutil = require('gulp-util');
var $mold = require('mold-source-map');
var $source = require('vinyl-source-stream');
var $inline = require('../transforms/inline');

module.exports = function (gulp, config) {
    var files = [
        $es6ify.runtime,
        config.appDir + config.jsEntryPoint
    ];
    var options = {
        debug: config.isDebug
    };
    $es6ify.traceurOverrides = {
        blockBinding: true
    };
    task.waitFor = config.buildStep1;
    function task() {
        return $browserify(files, options)
            .transform($inline(config))
            .transform($es6ify)
            .bundle()
            .on('error', $gutil.log)
            .pipe($mold.transformSourcesRelativeTo(config.appDir))
            .pipe($source(config.jsEntryPoint))
            .pipe(gulp.dest(config.distDir + '/js'))
            .pipe($connect.reload());
    }
    return task;
};