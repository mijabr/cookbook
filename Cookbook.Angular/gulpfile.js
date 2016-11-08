var gulp = require('gulp');
var del = require('del');

gulp.task('default', function () {
    // place code for your default task here
});

gulp.task('clean', function () {
    return del([
        '../Cookbook/cookbook',
        '../Cookbook/bin/cookbook',
    ], {force:true});
});

gulp.task('deploy',
    ['clean'],
    function () {
        gulp.src(['dist/*.html', 'dist/*.js'])
            .pipe(gulp.dest('../Cookbook/cookbook'))
            .pipe(gulp.dest('../Cookbook/bin/cookbook'));
        gulp.src(['dist/assets/*.*'])
            .pipe(gulp.dest('../Cookbook/cookbook/assets'))
            .pipe(gulp.dest('../Cookbook/bin/cookbook/assets'));
        gulp.src(['dist/assets/icon/*.*'])
            .pipe(gulp.dest('../Cookbook/cookbook/assets/icon'))
            .pipe(gulp.dest('../Cookbook/bin/cookbook/assets/icon'));
    });
