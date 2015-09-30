'use strict';
var gulp = require('gulp');

gulp.paths = {
	src: 'www',
	dist: 'build/dist',
	tmp: '.tmp',
	e2e: 'e2e'
};

var jspm = require('jspm');
var less = require('gulp-less');
var path = require('path');

var LessPluginCleanCSS = require('less-plugin-clean-css');
var LessPluginAutoPrefix = require('less-plugin-autoprefix');
var cleancss = new LessPluginCleanCSS({ advanced: true, sourceMap: true });
var autoprefix = new LessPluginAutoPrefix({ browsers: ["last 2 versions"] });


var bundleDir = './www/bundle/';
var bundlePath = bundleDir + 'postuj-hovna-bundle.js';


var buildRunning = false;
gulp.task('bundle', function() {
	buildRunning = true;
	return jspm.bundle('./app/cdm-fe', bundlePath, { mangle: false, inject: true }).then(function() {
		console.log('bundle done');
	});

});

gulp.task('less', function() {

	var mainLess = './www/less/bootstrap.less';
	console.log('compiling less: ' + mainLess);
	gulp.src(mainLess)
		.pipe(less({
			plugins: [autoprefix, cleancss]
		}))
		.on('error', function(err) {
			if (buildRunning) {
				throw err;  //we don't want to continue
			} else {
				console.error(err); //in the serve mode, we want to continue as if nothing happened
			}
		})
		.pipe(gulp.dest('./www/css'));
});

var exec = require('child_process').exec;

gulp.task('unbundle', function (cb) {
	exec('jspm unbundle', function (err, stdout, stderr) {
		console.log(stdout);
		console.log(stderr);
		cb(err);
	});
});


gulp.task('build', ['less','bundle', 'unbundle']);

gulp.task('default', [], function () {
	gulp.start('build');
});
