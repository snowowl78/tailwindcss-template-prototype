const { series, src, dest } = require('gulp');
const { fs } = require('fs');
var del = require('del');

// The `clean` function is not exported so it can be considered a private task.
// It can still be used within the `series()` composition.
function cleanBuildDir() {

    return del(['./dist']);

}

// The `build` function is exported so it is public and can be run with the `gulp` command.
// It can also be used within the `series()` composition.
function build(cb) {
  // body omitted
  cb(new Error('kaboom'));
}

function streamTask() {
  return src('src/*.js')
    .pipe(dest('dist/javaScipt'));
}
exports.cleanUp = cleanBuildDir;
exports.default = series(cleanBuildDir, streamTask, build);

// exports.build = build;
// exports.default = series(clean, build);

// First Session
// function defaultTask(cb) {
//   // place code for your default task here
//   cb();
// }
//
// exports.default = defaultTask
