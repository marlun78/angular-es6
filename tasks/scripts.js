'use strict';

var browserify = require('browserify');
var connect = require('gulp-connect');
var es6ify = require('es6ify');
var gutil = require('gulp-util');
var mold = require('mold-source-map');
var source = require('vinyl-source-stream');

es6ify.traceurOverrides = { blockBinding: true };

module.exports = function (gulp, config) {
    return function () {
        return browserify(
            [es6ify.runtime, config.appDir + config.jsEntryPoint],
            { debug: config.isDebug }
        )
            .transform(es6ify)
            .bundle()
            .on('error', gutil.log)
            .pipe(mold.transformSourcesRelativeTo(config.appDir))
            .pipe(source(config.jsEntryPoint))
            .pipe(gulp.dest(config.distDir + '/js'))
            .pipe(connect.reload());
    };
};