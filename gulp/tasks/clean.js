'use strict' /* строгость скрипта */

/*
module.exports = function () {
    $.gulp.task('clean', function () {
        return $.del([
            'build'
        ]);
    });
};
*/

module.exports = function() {
  $.gulp.task('clean', function(cb) {
    return $.del($.config.root, cb);
  });
};


