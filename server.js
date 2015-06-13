/**
 * for local development/debugging
 */

var bs = require('browser-sync').create();
var gulp = require('gulp');
require('./gulpfile');

bs.init({
	open: false,
	server: ['./www']
});

var from = 'www/**/';

bs.watch(from + '*.html').on('change', bs.reload);
bs.watch(from + '*.less').on('change', function() {
	gulp.start('less'); //not a public gulp API, but works, be aware of when updating gulp
});
bs.watch(from + '*.css').on('change', bs.reload);
bs.watch(from + '*.js').on('change', bs.reload);
