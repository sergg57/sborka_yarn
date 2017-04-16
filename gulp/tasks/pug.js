'use strict' /* строгость скрипта */

module.exports = function () {
    $.gulp.task('pug', function () {
        return $.gulp.src('./source/template/**/*.pug')
            .pipe($.gp.pug({pretty: true})) // true - чтобы HTML
                                           // компилировался не
                                          //  в одну строку
            .on('error', $.gp.notify.onError(function
                (error) {
                return {
                    title: 'Pug',
                    message: error.message
                }

            }))
            .pipe($.gulp.dest($.config.root));
            //.pipe($.gulp.dest('./build/'));
    });
};

