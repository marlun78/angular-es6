'use strict';

var browserify = require('browserify');
var connect = require('gulp-connect');
var es6ify = require('es6ify');
var gutil = require('gulp-util');
var mold = require('mold-source-map');
var source = require('vinyl-source-stream');

module.exports = function module(gulp, config) {
    var files = [
        es6ify.runtime, 
        config.appDir + config.jsEntryPoint
    ];
    var options = {
        debug: config.isDebug
    };
    es6ify.traceurOverrides = { 
        blockBinding: true
    };

    task.waitFor = ['clean'];
    function task() {
        return browserify(files, options)
            .transform(inlineView)
            .transform(es6ify)
            .bundle()
            .on('error', gutil.log)
            .pipe(mold.transformSourcesRelativeTo(config.appDir))
            .pipe(source(config.jsEntryPoint))
            .pipe(gulp.dest(config.distDir + '/js'))
            .pipe(connect.reload());
    }
    
    return task;
};

////////////////////////////////////////////////////////////////////////////////

// TODO: Move to separate file
var through = require('through2');
var fs = require('fs');
var $path = require('path');

// https://www.npmjs.com/package/html-minifier
var minifier = require('html-minifier');

var minifyOptions = {
    collapseWhitespace: true
};

function inlineView(file) {
    var pattern = /templateUrl(\s*:\s*)['"]([^'"]+)['"]/g;

    function replacer(match, colon, pathToView) {
        gutil.log('view inline:', file, pathToView);
        var html = fs.readFileSync($path.join('./app/', pathToView), 'utf8');
        var minified = minifier.minify(html, minifyOptions);
        // TODO: Escaping for single quotes needed
        return 'template' + colon + "'" + minified + "'";
    }

    return through(function (buf, enc, next) {
        this.push(buf.toString('utf8').replace(pattern, replacer));
        next();
    });
}
