;(function () {
    
'use strict';
 
var gulp = require('gulp'),
    prefixer = require('gulp-autoprefixer'),
    uglify = require('gulp-uglify'),
    sass = require('gulp-sass'),
    sourcemaps = require('gulp-sourcemaps'),
    pug = require('gulp-pug'),
    include = require("gulp-include"),
    rename = require("gulp-rename"),
    cssmin = require('gulp-minify-css'),
    imagemin = require('gulp-imagemin'),
    livereload = require('gulp-livereload'),
    babel = require('gulp-babel'),
    watch = require('gulp-watch'),
    pngquant = require('imagemin-pngquant'),
    spritesmith  = require('gulp.spritesmith'),
    connect = require('gulp-connect');


var path = {
    build: {
        html: 'build/',
        js: 'build/js/',
        css: 'build/css/',
        img: 'build/img/',
        fonts: 'build/fonts/',
        sprite: 'build/img/sprite'
    },
    src: { 
        html: 'src/*.pug', 
        js: 'src/js/main.js',
        style: 'src/style/main.scss',
        img: 'src/img/**/*.*', 
        fonts: 'src/fonts/**/*.*',
        sprite: 'src/sprite/*.png'
    },
    watch: { 
        html: 'src/**/*.pug',
        js: 'src/js/**/*.js',
        style: 'src/style/**/*.scss',
        img: 'src/img/**/*.*',
        fonts: 'src/fonts/**/*.*'
    },
    clean: './build'
};

////html
gulp.task('html:build', function () {
    gulp.src(path.src.html)
    .pipe(pug({
    	pretty: true
    }))
    .pipe(gulp.dest(path.build.html))
    .pipe(livereload());
});

////js
gulp.task('js:build', function () {
    gulp.src(path.src.js) 
        .pipe(include())
        .pipe(sourcemaps.init()) 
        .pipe(babel())
        .pipe(uglify()) 
        .pipe(sourcemaps.write()) 
        .pipe(gulp.dest(path.build.js))
        .pipe(livereload());
});


////style
gulp.task('style:build', function () {
    gulp.src(path.src.style) 
        .pipe(sourcemaps.init())
        .pipe(sass.sync().on('error', sass.logError))
        .pipe(prefixer({
            browsers: ['last 7 versions'],
            cascade: true
        })) 
        .pipe(cssmin())
        .pipe(sourcemaps.write())
        .pipe(rename("main.min.css"))
        .pipe(gulp.dest(path.build.css))
        .pipe(livereload());
});


////img
gulp.task('image:build', function () {
    gulp.src(path.src.img) 
        .pipe(imagemin({ 
            progressive: true,
            svgoPlugins: [{removeViewBox: false}],
            use: [pngquant()],
            interlaced: true
        }))
        .pipe(gulp.dest(path.build.img));
});

////sprite
gulp.task('sprite', function() {
    var spriteData = 
        gulp.src(path.src.sprite) 
            .pipe(spritesmith({
                imgName: 'sprite.png',
                cssName: 'sprite.css',
                padding: 3
            }));

    spriteData.img.pipe(gulp.dest(path.build.sprite)); 
    spriteData.css.pipe(gulp.dest(path.build.sprite)); 
});


////fonts(just copy to /build)
gulp.task('fonts:build', function() {
    gulp.src(path.src.fonts)
        .pipe(gulp.dest(path.build.fonts));
});

////local server
gulp.task('http-server', function() {
    connect.server({
        root: 'build',
        port: 9000,
        livereload: true
    });
    console.log('Server listening on http://localhost:9000');
});


////build all
gulp.task('build', [
    'html:build',
    'js:build',
    'style:build',
    'fonts:build',
    'image:build'
]);

//watch
gulp.task('watch', function(){
    livereload.listen();
    gulp.watch([path.watch.html], function(event, cb) {
        gulp.start('html:build');
    });
    gulp.watch([path.watch.style], function(event, cb) {
        gulp.start('style:build');
    });
    gulp.watch([path.watch.js], function(event, cb) {
        gulp.start('js:build');
    });
    gulp.watch([path.watch.img], function(event, cb) {
        gulp.start('image:build');
    });
    gulp.watch([path.watch.fonts], function(event, cb) {
        gulp.start('fonts:build');
    });
    gulp.start('http-server');
});


//default
gulp.task('default', ['build', 'watch']);

})();