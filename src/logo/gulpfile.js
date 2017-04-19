var gulp = require('gulp'),
  babel = require('gulp-babel'),
  uglify = require('gulp-uglify'),
  htmlmin = require('gulp-htmlmin')
  ;

gulp.task('scripts', () =>
  gulp.src('./index.js')
    .pipe(babel({
      presets: ['es2015'],
      plugins: [
        "transform-custom-element-classes",
        "transform-es2015-classes"
      ]
    }))
    .pipe(uglify())
    .pipe(gulp.dest('../../public/logo'))
);

gulp.task('html', () =>
  gulp.src('./index.html')
    .pipe(htmlmin({collapseWhitespace: true}))
    .pipe(gulp.dest('../../public/logo'))
);

gulp.task('scripts-debug', () =>
  gulp.src('./index.js')
    .pipe(gulp.dest('../../public/logo'))
);

gulp.task('html-debug', () =>
  gulp.src('./index.html')
    .pipe(gulp.dest('../../public/logo'))
);

gulp.task('watch', function() {
  gulp.watch('./*.*', ['scripts-debug', 'html-debug']);
  return;
});


gulp.task('default',['scripts', 'html'])
