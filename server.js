/**
 * for local development/debugging
 */
var bs = require('browser-sync').create();
var gulp = require('gulp');
require('./gulpfile');

var watchOptions = {
    ignored: 'www/jspm_packages/**/*.*',
    ignoreInitial: true
};
bs.init({
	open: false,
    watchOptions: watchOptions,
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

var from = 'www/**/*';
var extensionsToWatch = ['html', 'css', 'js', 'jsx'];
extensionsToWatch.forEach(function (ext){
    bs.watch(from + '.' + ext, watchOptions).on('change', bs.reload);
});

bs.watch(from + '*.less', watchOptions).on('change', function() {
	gulp.start('less'); //not a public gulp API, but works, be aware of when updating gulp
});

