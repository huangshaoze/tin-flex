var gulp = require('gulp');
var less = require('gulp-less');
var path = require('path');
var cssnano = require('gulp-cssnano');
var header = require('gulp-header');
var pkg = require('./package.json');
var rename = require('gulp-rename');
var browserSync = require('browser-sync');
var postcss = require('gulp-postcss');
var sourcemaps = require('gulp-sourcemaps');
var autoprefixer = require('autoprefixer');

gulp.task('build', function() {
    var banner = [
        '/*!',
        ' * loadme v<%= pkg.version %> (<%= pkg.homepage %>)',
        ' * Copyright <%= new Date().getFullYear() %> Tencent, Inc.',
        ' * Licensed under the <%= pkg.license %> license',
        ' */',
        ''
    ].join('\n');
    return gulp.src('./src/tinflex.less')
        .pipe(sourcemaps.init())
        .pipe(less())
        .pipe(postcss([autoprefixer(['iOS >= 7', 'Android >= 4.1'])]))
        .pipe(header(banner, { pkg: pkg }))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('./example/css/'))
        .pipe(gulp.dest('./dist/'))
        .pipe(cssnano({
            zindex: false,
            autoprefixer: false
        }))
        .pipe(rename(function(path) {
            path.basename += '.min';
        }))
        .pipe(gulp.dest('./dist/'));
});

gulp.task('server', function() {
    browserSync({
        server: {
            baseDir: "./example"
        }
    });
});

gulp.task('example', function() {
    return gulp.src('./src/tinflex.less')
        .pipe(sourcemaps.init())
        .pipe(less())
        .pipe(postcss([autoprefixer(['iOS >= 7', 'Android >= 4.1'])]))
        .pipe(sourcemaps.write())
        .pipe(browserSync.reload({ stream: true }))
        .pipe(gulp.dest('./example/css/'));
});

gulp.task('watch', ['example', 'server'], function() {
    gulp.watch("./src/*.less", ['example']);
    gulp.watch("./src/**/*.less", ['example']);
    gulp.watch("./example/*.html").on('change', browserSync.reload);
});