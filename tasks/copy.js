'use strict';

module.exports = function (gulp, config) {
    return function () {
        return gulp.src('./node_modules/angular/angular.js')
            .pipe(gulp.dest(config.distDir + '/js'));
    };
};