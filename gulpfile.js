var gulp = require('gulp');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var notify = require('gulp-notify');
var jshint = require('gulp-jshint');
var sass = require('gulp-sass');
var img = require('gulp-image')
var minifyCSS = require('gulp-minify-css');


gulp.task('script', function(){
		//aca va la tarea
	gulp.src('src/js/*.js')
	.pipe(jshint())
	.pipe(jshint.reporter('default'))
	.pipe(concat('script.min.js'))
	.pipe(uglify())
	.pipe(gulp.dest('dist/js'));
});
	// tarea script

gulp.task('style', function() {
	gulp.src('src/sass/main.scss')//transformar los sass
	.pipe(sass().on('error', sass.logError))//para que avise errores mas explicitos
	.pipe(minifyCSS())
	.pipe(concat('style.min.css'))
	.pipe(gulp.dest('dist/css'))
	// tarea style
});

gulp.task('images', function() {
	 gulp.src('docs/**/*.{jpg,jpeg,gif,png,svg}')
    .pipe(gulp.dest('dist/img'));// tarea images
});

gulp.task('fonts', function(){
	gulp.src('src/fonts/*')//toma todo lo que esta dentro
	.pipe(gulp.dest('dist/fonts'));//deja todo lo que tome
});

gulp.task('default', ['images', 'style', 'script','fonts']);