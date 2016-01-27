var gulp = require('gulp');
var watch = require('gulp-watch');
var jade = require('gulp-jade');
var plumber = require('gulp-plumber');
var compass = require('gulp-compass');
 
var jadePath = "./jade/*.jade"

gulp.task('jade', function() {
  var YOUR_LOCALS = {};
 
  gulp.src('./jade/*.jade')
    .pipe(plumber())
    .pipe(jade({
      locals: YOUR_LOCALS,
      pretty:"\t"
    }))
    .pipe(gulp.dest('./html/'))
});

gulp.task('compass', function() {
  gulp.src('.scss/main.scss')
    .pipe(compass({
      config_file: './config.rb',
      css: 'css',
      sass: 'scss'
    }))
});

gulp.task('watch', function(){
	gulp.watch(jadePath, ['jade']);
	gulp.watch('./scss/includes/*.scss', ['compass']);
});