var gulp          = require('gulp')
    ,rename       = require('gulp-rename')
    ,sass         = require('gulp-sass')
    ,sourcemaps   = require('gulp-sourcemaps')
    ,prefix   = require('gulp-autoprefixer');



gulp.task('sass', function () {
    return gulp.src('scss/*.scss')
    .pipe(sourcemaps.init())
        .pipe(sass({
            errLogToConsole: true,
            sourcemap: true,
            style: 'compact' /*,
            outputStyle: 'compressed'*/
        }))
        .pipe(prefix("last 1 version", "> 1%", "ie 8", "ie 7"))
        .pipe(rename({
            basename:   'style',
        /*    suffix:     '.min',*/
            extname:    '.css'
        }))
        .pipe(sourcemaps.write('./'))
        .pipe(gulp.dest('./css/'));
});


gulp.task('default', ['sass', /*'browser-sync'*/], function () {
    gulp.watch("scss/**/*.scss", ['sass']);
});
