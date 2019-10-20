'use strict';

module.exports = function () {
  $.gulp.task('watch', function () {
    $.gulp.watch('./src/sass/**/*.scss', $.gulp.series('sass'));
    $.gulp.watch('./src/pug/**/*.pug', $.gulp.series('pug'));
    $.gulp.watch('./src/js/**/*.*', $.gulp.series('js'));
    $.gulp.watch('./src/img/**/*.*', $.gulp.series('img'));
    $.gulp.watch('./src/fonts/**/*.*', $.gulp.series('fonts'));
  });
};