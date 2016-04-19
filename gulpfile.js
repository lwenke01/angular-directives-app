'use strict';

var gulp = require('gulp');
var webpack = require('gulp-webpack');
var lint = require('gulp-eslint');

var paths = [ '*.js', 'client-server.js', 'app/templates/*.html','app/*.js'];


gulp.task('eslint', function(){
  gulp.src(paths)
  .pipe(lint())
  .pipe(lint.format());
});

gulp.task('build:html', function(){
  gulp.src('*.html')
  .pipe(gulp.dest('build/'));
});

gulp.task('build:js', function(){
  return gulp.src(__dirname + '/app/app.js')
.pipe(webpack({
  watch: true,
  module: {
    loaders: [
      { test: /\.css$/, loader: 'style!css'}
    ]
  },
  output: {
    filename: 'bundle.js'
  }
}))
.pipe(gulp.dest(__dirname + '/build/'));
});

gulp.task('watch',function ()  {
  gulp.watch(paths);
});


gulp.task('default', ['eslint','build:js', 'build:html','watch']);
