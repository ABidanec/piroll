'use strict';

module.exports = function () {
    $.gulp.task('js',function () {
        return $.gulp.src('src/js/**/*.*')
            .pipe($.gulp.dest('./build/js'));
    })
}