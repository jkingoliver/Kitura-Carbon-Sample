'use strict'; // eslint-disable-line

const gulp = require('gulp');
const sass = require('gulp-sass');
const prefix = require('gulp-autoprefixer');
const sourcemaps = require('gulp-sourcemaps');

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

gulp.task('styles', () =>
  gulp
    .src('client/scss/*.scss')
    .pipe(sourcemaps.init())
    .pipe(
      sass({
        outputStyle: 'compressed',
        includePaths: ['node_modules'],
      })
    )
    .pipe(
      prefix({
        browsers: ['> 1%', 'last 2 versions'],
      })
    )
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('./public/css'))
);

gulp.task('default', ['copyJS', 'img', 'index', 'styles']);