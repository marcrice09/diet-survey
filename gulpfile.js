const gulp = require('gulp');
const sass = require('gulp-sass');
const minify = require('gulp-minify-css');

// eslint-disable-next-line
gulp.task('sass', () => {
  return gulp.src('css/main.scss')
    .pipe(sass())
    .pipe(minify())
    .pipe(gulp.dest('public/'));
});

gulp.task('watch', gulp.series('sass', function() { // eslint-disable-line
  gulp.watch('css/*.scss', gulp.series('sass'));
}));

gulp.task('default', gulp.series('watch'));
