var gulp = require('gulp');
var sass = require('gulp-sass');
var concat = require('gulp-concat');
var browserSync = require('browser-sync').create();

gulp.task('styles', function() {
    gulp.src(['src/scss/index.scss'])
        .pipe(sass().on('error', sass.logError))
        .pipe(concat('application.css'))
        .pipe(gulp.dest('stylesheets'))
        .pipe(browserSync.stream())
});

gulp.task('scripts', function() {
    gulp.src(['src/js/**/*.js'])
        .pipe(concat('theme.js'))
        .pipe(gulp.dest('javascripts'))
});

gulp.task('scripts-watch', ['scripts'], browserSync.reload);

gulp.task('livereload', ['styles', 'scripts'], function() {
    browserSync.init({
        proxy: "http://127.0.0.1:8080/redmine/"
    });

    gulp.watch('src/scss/*.scss', ['styles']);
    gulp.watch('src/js/*.js', ['scripts']);
});

gulp.task('default', ['livereload'], function() {
    gulp.run('styles', 'scripts');
});