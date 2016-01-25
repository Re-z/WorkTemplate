/**
 * Created by admin on 11.01.2016.
 */
var Promise = require('es6-promise').Promise;
var gulp = require('gulp');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var imagemin = require('gulp-imagemin');
var cssmin = require('gulp-cssmin');


gulp.task('default', ['sass', 'auto', 'cssmin', 'watch']);




gulp.task('sass', function(){
        gulp.src('./sass/**/*.scss')
            .pipe(sass().on('error', sass.logError))
            .pipe(gulp.dest('./css'));
});

gulp.task('auto', function () {
    return gulp.src('./css/**/*.css')
        .pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
        }))
        .pipe(gulp.dest('css/'));
});

gulp.task('watch', function(){
    gulp.watch('./sass/**/*.scss', ['sass']);
    gulp.watch('./css/**/*.css', ['auto']);
});

gulp.task('imagemin', function(){
    gulp.src('./temp/**/*.*')
    .pipe(imagemin())
    .pipe(gulp.dest('img/'));
});  

gulp.task('cssmin', function(){
    gulp.src('./css/**/*.css')
    .pipe(cssmin())
    .pipe(gulp.dest('css/'))
})