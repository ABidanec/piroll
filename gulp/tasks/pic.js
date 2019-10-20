'use strict';

module.exports = function () {
  $.gulp.task('pic',function () {
      return $.gulp.src('src/pic/**/*.*')
          .pipe($.gulp.dest('./build/pic'));
  })
};