const path = require("path");
const gulp = require("gulp");
const gulpsync = require("gulp-sync")(gulp);
const clean = require("gulp-clean");
const rename = require("gulp-rename");
const webpack = require("gulp-webpack");
const babel = require('gulp-babel');
 
gulp.task("default", gulpsync.sync([ "clean", "webpack" ]));

gulp.task("clean", () => {
  return gulp.src( "./dist/*" )
    .pipe(clean())
  ;
});

gulp.task("webpack", () => {
  return webpack(require( "./webpack.config.js" ))
    .pipe(rename("easing-animation.js"))
    .pipe(babel({ presets: ["es2015"] }))
    .pipe(gulp.dest( "./dist" ))
  ;
});