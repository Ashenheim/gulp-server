'use strict';


// Requirements
var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync').create();

var files = {
    sass: {
        src: [
            'sass/**/*.{scss,sass}',
            'sass/*.{scss,sass}'
        ],
        dest: 'css/'
    }
};

// Invidual tasks
gulp.task('sass', function() {
    gulp.src(files.sass.src)
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest(files.sass.dest))
        .pipe(browserSync.stream());
});


gulp.task('watch', function() {
    gulp.watch('./sass/**/*.{sass,scss}', ['sass']);
    gulp.watch('*.html').on('change', browserSync.reload);
});

gulp.task('browser-sync', function() {
    browserSync.init({
        server: {
            baseDir: "./",
            online: false,

            notify: {
                styles: [
                    'color: rgb(255, 255, 255)',
                    'position: fixed',
                    'z-index: 999999',
                    'bottom: 0px',
                    'left: 0px',
                    'font-size: 1em',
                    'background: rgba(0, 0, 0, 0.8)',
                    'font-family: arial, sans-serif',
                    'padding: 10px',
                    'box-shadow: 0 0 5px rgba(0,0,0,.3)'
                ]
            }
        }
    });
});


// Bundled tasks
gulp.task('default', ['sass', 'watch', 'browser-sync']);