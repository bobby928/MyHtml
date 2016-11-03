/**
 * Created by Administrator on 2016/10/25.
 */
var postcss = require('gulp-postcss');
var gulp = require('gulp');
var autoprefixer = require('autoprefixer');
var sourcemaps   = require('gulp-sourcemaps');
// var cssnano = require('cssnano');

gulp.task('autoprefixer', function () {

    return gulp.src('css/index.css')
        .pipe(sourcemaps.init())
        .pipe(postcss([ autoprefixer({ browsers: ['last 2 versions'] }) ]))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('./dest'));
});