'use strict';

var $gulp = require('gulp');
var $glob = require('glob');
var $path = require('path');

var config = {
    root: __dirname,
    appDir: './app/',
    distDir: './dist/',
    jsEntryPoint: 'main.js',
    isDebug: true,
    dependencies: {
        clean: [],
        copy: ['clean'],
        html: ['clean'],
        scripts: ['clean'],
        stylus: ['clean'],
        server: ['copy', 'html', 'stylus', 'scripts'],
        watch: ['copy', 'html', 'stylus', 'scripts']
    }
};

loadTasks('tasks/**/*.js', $gulp, config);
$gulp.task('default', [
    'clean', 'copy', 'html', 'stylus', 'scripts', 'server', 'watch'
]);

function loadTasks(tasksPattern) {
    var args = Array.prototype.slice.call(arguments, 1);
    $glob.sync(tasksPattern).forEach(function loadTask(path) {
        var taskName = $path.basename(path, '.js');
        var module = require('./' + path);
        var task = module.apply(null, args);
        $gulp.task(taskName, task.waitFor, task);
    });
}