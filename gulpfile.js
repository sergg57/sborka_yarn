'user strict'

/*
var gulp = require ('gulp');
var csso = require ('gulp-csso');

gulp.task('default', function () {
    return gulp.src('css/*.css')
        .pipe(csso())
        .pipe(gulp.dest('build/css'));
});
*/

global.$ = {
     package: require('./package.json'),
     config: require('./gulp/config'),
     path: {
          task: require('./gulp/paths/tasks.js'),
          jsFoundation: require('./gulp/paths/js.foundation.js'),
          cssFoundation: require('./gulp/paths/css.foundation.js'),
          app: require('./gulp/paths/app.js')
     },
     gulp:require ('gulp'),
     del:require ('del'),
     browserSync: require('browser-sync').create(),
     gp: require ('gulp-load-plugins')(),
     spritesmith:require('gulp.spritesmith')
};

// реквайрим (вызываем) модуль sass.js
// и сразу делаем вызов (регистрируем -task), чтобы иметь к нему доступ

$.path.task.forEach(function (taskPath) {
     require(taskPath)();

});

$.gulp.task('default', $.gulp.series(
  'clean',
  $.gulp.parallel(
    'sass',
    'pug',
    'js:foundation',
    'js:process',
    'copy:image',
    'css:foundation',
    'sprite:svg',
    'sprite:png',
    'copy:font',
    'copy:other'

  ),
  $.gulp.parallel(
    'watch',
    'serve'
  )
));


