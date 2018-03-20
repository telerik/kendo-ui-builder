const gulp = require('gulp-help')(require('gulp'));
const tasks = require('@telerik/kendo-common-tasks');
const docsServer = require('@telerik/kendo-common-tasks/docs-server');

gulp.task('docs', (done) => docsServer('kendo-ui-builder', (browserSync) => {
        gulp.watch('docs/**/*.md').on('change', browserSync.reload);
    }, () => {})
);

