/**
 * for local development/debugging
 */
var bs = require('browser-sync').create();
var gulp = require('gulp');
require('./gulpfile');

bs.init({
	open: false,
	server: {
		baseDir: "./www",
		middleware: [
			function(req, res, next) {
				res.setHeader('Access-Control-Expose-Headers', 'Accept-Ranges, Content-Encoding, Content-Length, Content-Range');
				next();
			},
			function(req, res, next) {
				res.setHeader('Access-Control-Allow-Origin', 'example.com');
				res.setHeader('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
				res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

				next();
			}]
	}
});

var from = 'www/**/';

bs.watch(from + '*.html').on('change', bs.reload);
bs.watch(from + '*.less').on('change', function() {
	gulp.start('less'); //not a public gulp API, but works, be aware of when updating gulp
});
bs.watch(from + '*.css').on('change', bs.reload);
bs.watch(from + '*.js').on('change', bs.reload);
