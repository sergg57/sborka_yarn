'use strict' /* строгость скрипта */

module.exports = function () {
    $.gulp.task('sprite:png', function () {
      return $.gulp.src('./source/sprite/*.png')// папка откуда забираем
      .pipe($.gp.spritesmith({
        imgName: 'sprite.png',
        cssName: '../css/sprite.css'
      }))
    //.pipe($.gulp.dest('./build/assets/img'));
    .pipe($.gulp.dest($.config.root + '/assets/img'))
    });
};
