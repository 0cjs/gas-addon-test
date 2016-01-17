'use strict'

const gulp = require('gulp')
const concat = require('gulp-concat')
const include = require('gulp-include')
const rename = require('gulp-rename')
const dest_clean = require('gulp-dest-clean')
const nodeunit_runner = require('gulp-nodeunit-runner')

const through = require('through2')
const showVs = (prefix) => {
    return through.obj((file, encoding, callback) => {
        console.log('======== ', prefix)
        console.log(
            'keys: ', Object.keys(file),
            '\npath: ', file.path,
            '\nbase: ', file.base,
            '\ncwd: ', file.cwd,
            '\nhistory: ', file.history)
        callback(null, file)
    })
}

gulp.task('build-gas-unit-test', () => {
    const output = '.build/gas-unit-test/'
    return gulp
        .src('src/**/*.gt')
        .pipe(include())
        .on('error', console.log)
        .pipe(rename({ extname: '.jt' }))
        .pipe(dest_clean(output))
        .pipe(gulp.dest(output))
})

gulp.task('test', ['build-gas-unit-test'], () => {
    return gulp
        .src(['src/**/*.jt', '.build/**/*.jt'])
        .pipe(nodeunit_runner())
})
