var gulp = require('gulp');
var sourcemaps = require('gulp-sourcemaps');
var gulpJspm = require('gulp-jspm');

gulp.task('js', function() {
    return gulp
        .src('./public/index.js')
        .pipe(gulpJspm())
        .pipe(gulp.dest('./public'))
    ;
});

gulp.task('watch', function (cb) {
    watch('public/**/*.js', function(file) {
        file
            .pipe(gulpJspm())
            .pipe(gulp.dest('./public'))
    });
});



// gulp.task('default', function () {
//     return gulp.src('src/**/*.js')
//         .pipe(sourcemaps.init())
//         .pipe(babel({
//             optional: ['runtime']
//         }))
//         .pipe(sourcemaps.write('.'))
//         .pipe(gulp.dest('dist'));
// });
