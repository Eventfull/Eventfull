var gulp = require('gulp');
var htmlreplace = require('gulp-html-replace');
var source = require('vinyl-source-stream');
var browserify = require('browserify');
var watchify = require('watchify');
var reactify = require('reactify');
var runSequence = require('run-sequence');
var plugins = require('gulp-load-plugins')();
// for production build:
    // var streamify = require('gulp-streamify');
    // var uglify = require('gulp-uglify');

//Sets up all of the paths
var path = {
  CLIENT_JS: 'client/js/**/*.js',
  TEST_SRC: '__tests__/*.js',
  HTML: 'client/index.html',
  MINIFIED_OUT: 'build.min.js',
  CSS: 'client/css/*',
  IMAGE: 'client/img/*',
  OUT: 'build.js',
  DEST: 'dist/client',
  DEST_BUILD: 'dist/build',
  DEST_SRC: 'dist/client',
  DEST_STYLE: 'dist/client/style',
  ENTRY_POINT: './client/js/App.js'
};

// Copies HTML file, replaces script source with the bundled source.
gulp.task('replaceHTMLsrc', function(){
  console.log('transfering HTML file and swapping source with bundle.js');
  gulp.src(path.HTML)
    .pipe(htmlreplace({
      'js': path.OUT
    }))
    .pipe(gulp.dest(path.DEST));
});

// Transfers CSS and Image folders over to distribution.
// This will temporarily happen without any without any processing.
gulp.task('transferStyles', function(){
  console.log('transfering styles to distribution folder');
  gulp.src([path.CSS, path.IMAGE])
    .pipe(gulp.dest(path.DEST_STYLE));
});

// watches HTML and JS for changes, browserify and reactifys JS, and bundles it all.
gulp.task('watch', function() {
  gulp.watch(path.HTML, ['replaceHTMLsrc']);

  var watcher  = watchify(browserify({
    entries: [path.ENTRY_POINT],
    transform: [reactify],
    debug: true,
    cache: {}, packageCache: {}, fullPaths: true
  }));

  return watcher.on('update', function () {
    var timeStamp = new Date();
    watcher.bundle()
      .pipe(source(path.OUT))
      .pipe(gulp.dest(path.DEST_SRC));
      console.log('Updated @ ' + timeStamp.toTimeString());
    })
    .bundle()
    .on('error', function(err) {
      console.log(err.message);
      this.end();
    })
    .pipe(source(path.OUT))
    .pipe(gulp.dest(path.DEST_SRC));
});

// Runs the Jest testing suite a single time
gulp.task('jest', plugins.shell.task('npm test', {
  ignoreErrors: true //so task doesn't error out when test fails
}));

// Runs the Jest testing suite once and then again any time changes are made to either the client's javascript files or the testing files.
gulp.task('watchTests', function(){
  runSequence('jest');
  gulp.watch([path.CLIENT_JS, path.TEST_SRC], ['jest']);
});

gulp.task('default', ['replaceHTMLsrc', 'transferStyles', 'watch']);

// Version 1.2.0 of gulp-uglify uses a breaking version of UglifyJS (2.4.19)
// We can update this once we start needing to deal with production

// gulp.task('build', function(){
//   browserify({
//     entries: [path.ENTRY_POINT],
//     transform: [reactify]
//   })
//     .bundle()
//     .pipe(source(path.MINIFIED_OUT))
//     .pipe(streamify(uglify(path.MINIFIED_OUT)))
//     .pipe(gulp.dest(path.DEST_BUILD));
// });

// gulp.task('replaceHTML', function(){
//   gulp.src(path.HTML)
//     .pipe(htmlreplace({
//       'js': 'build/' + path.MINIFIED_OUT
//     }))
//     .pipe(gulp.dest(path.DEST));
// });

// gulp.task('production', ['replaceHTML', 'build']);
