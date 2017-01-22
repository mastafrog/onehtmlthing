var gulp        = require('gulp');
//var browserSync = require('browser-sync');
//var reload      = browserSync.reload;
var rename      = require('gulp-rename');
var sass        = require('gulp-sass');
 
// browser-sync task for starting the server.
gulp.task('browser-sync', function() {
//    //watch files
//    var files = [
//    './style.css',
//    './*.php',
//    './page-templates/*.php',
//    './modules/*.php',
//    './src/js/*.js'
//    ];
// 
//    //initialize browsersync
//    browserSync.init(files, {
//    //browsersync with a php server
//    proxy: "localhost:8080/orthofit/",
//    notify: false
//    });
});
 
// Sass task, will run when any SCSS files change & BrowserSync
// will auto-update browsers
gulp.task('sass', function () {
    return gulp.src('scss/*.scss')
        .pipe(sass({ errLogToConsole: true,outputStyle: 'compressed' }))
        .pipe(rename('style.css'))
        .pipe(gulp.dest('./'))
//        .pipe(reload({stream:true}));
});
 
// Default task to be run with `gulp`
gulp.task('default', ['sass', /*'browser-sync'*/], function () {
    gulp.watch("scss/*.scss", ['sass']);
    gulp.watch("scss/bootstrap/*.scss", ['sass']);
    gulp.watch("scss/bootstrap/mixins/*.scss", ['sass']);
    gulp.watch("scss/modules/*.scss", ['sass']);
    gulp.watch("scss/partials/*.scss", ['sass']);
    gulp.watch("scss/vendor/*.scss", ['sass']);
    gulp.watch("scss/setup/*.scss", ['sass']);
});


//// FTP Deploy
//var gutil = require( 'gulp-util' );
//var ftp = require( 'vinyl-ftp' );
//
//gulp.task( 'deploy', function () {
// 
//    var conn = ftp.create( {
//        host:     '',
//        user:     '',
//        password: '',
//        parallel: 10,
//        // log:      gutil.log
//    } );
// 
//    var globs = [
//        'src/**',
//        'js/**',
//        'fonts/**',
//        '*.php',
//        '*.json',
//        '*.css'
//    ];
// 
//    // using base = '.' will transfer everything to /public_html correctly 
//    // turn off buffering in gulp.src for best performance 
// 
//    return gulp.src( globs, { base: '.', buffer: false } )
//        .pipe( conn.newer( '' ) ) // only upload newer files 
//        .pipe( conn.dest( '' ) );
// 
//} );