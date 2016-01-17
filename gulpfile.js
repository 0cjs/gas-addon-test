'use strict'

const gulp = require('gulp')
const concat = require('gulp-concat')
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

const deleteFiles = through.obj((file, encoding, callback) => {
    const fs = require('fs'), path = file.path
    console.log('***** Unlinking ', path)
    //fs.unlinkSync(path)   // XXX may run before test runner is done!
    callback(null, null)
})

gulp.task('test', function() {
    gulp.src(['./src/gas-date-sort/**/*.js', './src/**/*.jt'])
        .pipe(showVs('1'))
        .pipe(concat('gas-test.js'))
        .pipe(showVs('2'))
        .pipe(gulp.dest('tmp'))
        .pipe(showVs('3'))
        .pipe(nodeunit_runner())
        .pipe(showVs('4'))
        .pipe(deleteFiles)
        .pipe(showVs('5'))

});
