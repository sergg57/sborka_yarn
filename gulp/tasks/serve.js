'use strict' /* строгость скрипта */

/*
module.exports = function () {
    $.gulp.task('serve', function () {
        $.browserSync.init({
            open: false, // не надо автоматически открывать браузер
            server: './build' // только эту папку будет обслуживать
        });
        $.browserSync.watch('build', $.browserSync.reload);
    }); // BrowserSync - следит только за папкой - build и когда
        // в ней что-то изменяется только тогда он перезагружается
};

*/

module.exports = function() {
  $.gulp.task('serve', function() {
    $.browserSync.init({
      open: false,
      server: $.config.root
    });

    $.browserSync.watch([$.config.root + '/**/*.*', '!**/*.css'], $.browserSync.reload);
  });
};

