var gulp = require('gulp');
var stylus = require('gulp-stylus');
var sourcemaps = require('gulp-sourcemaps');

gulp.task('styl', function () {
    return gulp.src('public/media/styles/stylus/inc/*.styl')
        .pipe(sourcemaps.init())
        .pipe(sourcemaps.write())
        .pipe(stylus())
        .pipe(gulp.dest('public/media/styles'));
});