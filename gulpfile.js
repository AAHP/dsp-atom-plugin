const gulp = require('gulp');
const replace = require('gulp-replace');
const zip = require('gulp-zip');

// replace and add install file to dist/dsp-atom-plugin/ folder
gulp.task('add-install-file', () => {
  gulp.src(['installPlugin'])
    .pipe(replace('#move to dir dist', '#move out of plugin'))
    .pipe(replace('cd dist', 'cd ..'))
    .pipe(gulp.dest('dist/dsp-atom-plugin/'));
});

// add files to dist/dsp-atom-plugin/ folder
gulp.task('build-plugin', () => {
  gulp.src([
    `${__dirname}/**/*`,
    `${__dirname}/{node_modules,node_modules/**/*,node_modules/.*/**/*}`,
    `!${__dirname}/{_project,_project/**}`,
    `!${__dirname}/{js-contracts/js,js-contracts/js/**}`,
    `!${__dirname}/{js-contracts/js-jquery,js-contracts/js-jquery/**}`,
    `!${__dirname}/js-contracts/README.md`,
    `!${__dirname}/{browser-plus,browser-plus/**}`,
    `!${__dirname}/{spec,spec/**}`,
    `!${__dirname}/gulpfile.js`,
    `!${__dirname}/yarn.lock`,
    `!${__dirname}/installPlugin`,
    `!${__dirname}/README.md`,
  ])
    .pipe(gulp.dest('dist/dsp-atom-plugin/'));
});
// add files to dist/dsp-atom-plugin/ folder
gulp.task('copy-browser-plus', () => {
  gulp.src([
    `${__dirname}/browser-plus/**/*`,
  ])
    .pipe(gulp.dest('dist/browser-plus/'));
});

gulp.task('zip-dist', () =>
    gulp.src(['dist/**/*'])
        .pipe(zip('dsp-atom-plugin.zip'))
        .pipe(gulp.dest('dist/'))
);

gulp.task('build', ['build-plugin', 'copy-browser-plus']);
gulp.task('zip', ['zip-dist']);
