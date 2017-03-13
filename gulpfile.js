var gulp = require("gulp");
var source = require("vinyl-source-stream");
var browserify = require("browserify");
var concat = require("gulp-concat");

gulp.task("myTask", function() {
  console.log("hello gulp");
});

gulp.task('concatInterface', function() {
  return gulp.src(['./js/*-interface.js', './js/signup-interface.js'])
  .pipe(concat('allConcat.js'))
  .pipe(gulp.dest('./tmp'));
});

gulp.task('jsBrowserify', ['concatInterface'], function() {
  return browserify({ entries: ['./tmp/allConcat.js'] })
    .bundle()
    .pipe(source('app.js'))
    .pipe(gulp.dest('./build/js'));
});
