'use strict'; // eslint-disable-line

const gulp = require('gulp');

gulp.task('copyJS', () =>
  gulp
    .src(['node_modules/carbon-components/scripts/carbon-components.min.js'])
    .pipe(gulp.dest('public/js'))
);

gulp.task('index', function() {
    return gulp.src('./client/index.html')
        .pipe(gulp.dest('public/'))
});

gulp.task('img', function() {
    return gulp.src('./client/assets/img/*')
        .pipe(gulp.dest('public/img/'))
});

gulp.task('default', ['copyJS', 'img', 'index']);