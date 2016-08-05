'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('styles', function() {
    gulp.src('source/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('public/css/'));
});

gulp.task('copy', function () {
    gulp.src(['node_modules/angular/angular.js','node_modules/angular-ui-router/release/angular-ui-router.js','node_modules/angular-utils-pagination/dirPagination.js'])
    .pipe(gulp.dest('public/js/modules/'));
});

//Watch task
gulp.task('watch',function() {
    gulp.watch(['source/*.scss'], ['styles']);
});
