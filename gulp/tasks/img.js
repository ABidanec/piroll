'use strict';

module.exports = function () {
    $.gulp.task('img',function () {
        return $.gulp.src('src/img/**/*.*')
            .pipe($.gulp.dest('./build/img'));
    })
}