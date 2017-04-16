'use strict';

module.exports = function() {
  $.gulp.task('js:process', function() {
    return $.gulp.src($.path.app)
      .pipe($.gp.sourcemaps.init()) //  распаковывает нижележащий файл
      .pipe($.gp.concat('app.js'))
      .pipe($.gp.sourcemaps.write()) // записывает вышележащий  файл
      .pipe($.gulp.dest($.config.root + '/assets/js'))
  })
};
