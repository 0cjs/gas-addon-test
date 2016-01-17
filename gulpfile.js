'use strict'

const gulp = require('gulp')
const nodeunit_runner = require('gulp-nodeunit-runner')

gulp.task('test', function() {
    gulp.src('./src/**/*.jt').pipe(nodeunit_runner())
});
