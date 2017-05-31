var path = require("path");
var gulp = require("gulp");
var gulpsync = require("gulp-sync")(gulp);
var clean = require("gulp-clean");
var rename = require("gulp-rename");
var webpack = require("gulp-webpack");
 
gulp.task("default", gulpsync.sync([ "clean", "webpack" ]));

gulp.task("clean", () => {
  return gulp.src( "./dist/*" )
    .pipe(clean())
  ;
});

gulp.task("webpack", () => {
  return webpack(require( "./webpack.config.js" ))
    .pipe(rename("easing-animation.js"))
    .pipe(gulp.dest( "./dist" ))
  ;
});