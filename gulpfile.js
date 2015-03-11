'use strict';

var gulp = require('gulp');
var glob = require('glob');
var path = require('path');

var config = {
    appDir: './app/',
    distDir: './dist/',
    jsEntryPoint: 'main.js',
    isDebug: true
};

loadTasks('tasks/**/*.js', gulp, config);
gulp.task('default', ['clean', 'copy', 'html', 'stylus', 'scripts', 'server', 'watch']);

function loadTasks(tasksPattern) {
    var args = Array.prototype.slice.call(arguments, 1);
    glob.sync(tasksPattern).forEach(function loadTask(filePath) {
        var filename = path.basename(filePath, '.js');
        var module = require('./' + filePath);
        gulp.task(filename, module.apply(this, args));
    });
}