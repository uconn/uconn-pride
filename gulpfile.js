const gulp = require('gulp');
const cleanCss = require('gulp-clean-css');
const concat = require('gulp-concat');
const plumber = require('gulp-plumber');
const sourcemaps = require('gulp-sourcemaps');
const browserSync = require('browser-sync');
const uglify = require('gulp-uglify');
const jshint = require('jshint');
const stylish = require('jshint-stylish');

const onError = err => {
  console.log(`Error -> ${err}`);
}

gulp.task('css', () => {
  return gulp.src('./css/**/*.css')
    .pipe(plumber({
      errorHandler: onError()
    }))
    .pipe(sourcemaps.init())
      .pipe(concat('style.css'))
      .pipe(cleanCss({
        compatibility: 'ie9'
      }))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('dist', {
      overwrite: true
    }))
    .pipe(browserSync.stream())
});

gulp.task('js', () => {
  return gulp.src('./js/**/*.js')
    .pipe(plumber({
      errorHandler: onError()
    }))
    .pipe(sourcemaps.init())
      .pipe(concat('index.js'))
      .pipe(uglify())
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('dist', {
      overwrite: true
    }))
    .pipe(browserSync.stream())
});

gulp.task('watch', ['css', 'js'], () => {
  console.log('watching files');
  const files = [
    './css/**/*.css',
    './js/**/*.js'
  ];
  browserSync.init(files, {
    proxy: "web:80",
    notify: true,
    open: false
  });
  gulp.watch(['./css/**/*.css'], ['css']);
  gulp.watch(['./js/**/*.js'], ['js']);
});

gulp.task('default', ['css', 'js']);
