'use strict';

/*
module.exports = function() {
  $.gulp.task('js:foundation', function() {
    return $.gulp.src($.path.jsFoundation) //последовательность объединяемых файлов
      .pipe($.gp.concat('foundation.js')) // название файла в который объединяются
        //.pipe($.gulp.dest($.config.root + '/assets/js')) // куда поместить этот файл
      .pipe($.gulp.dest('/assets/js')) // куда поместить этот файл
  })
};
*/



module.exports = function() {
  $.gulp.task('js:foundation', function() {
    return $.gulp.src($.path.jsFoundation)
      .pipe($.gp.concat('foundation.js'))
      .pipe($.gulp.dest($.config.root + '/assets/js'))
      //.pipe($.gulp.dest('./build/assets/js'))
  })
};
