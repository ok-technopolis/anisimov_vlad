const gulp = require('gulp');
const sass = require('gulp-sass');
const sourcemaps = require('gulp-sourcemaps');
const clean = require('gulp-clean');
const rebaseUrls = require('gulp-css-rebase-urls');


gulp.task('images-clean-dist', function() {
    gulp.src('./public/dist/images', {read: false})
        .pipe(clean())
});

gulp.task('images', ['images-clean-dist'], function() {
    gulp.src('./src/images/**/*')
        .pipe(gulp.dest('./public/dist/images'))
});

gulp.task('images:watch', ['images'],  function() {
    gulp.watch('./src/images/**/*', ['images'])
});

gulp.task('sass', function() {
    gulp.src('./src/styles/default.scss')
        .pipe(sourcemaps.init())
        .pipe(sass().on('error', sass.logError))
        .pipe(rebaseUrls())
        .pipe(sourcemaps.write('./'))
        .pipe(gulp.dest('./public/dist/styles'))
});

gulp.task('sass:watch', ['sass'], function() {
    gulp.watch('./src/styles/**/*.scss', ['sass'])
});


// common
gulp.task('build', ['sass', 'images']);
gulp.task('default', ['sass:watch', 'images:watch']);
