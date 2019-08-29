/*import gulp from 'gulp';*/

/*var gulp = require('gulp'); 

*/

const gulp = require('gulp');
const sass = require('gulp-sass');
const browserSync = require('browser-sync').create();
/*Do not need to require gulp-watch anymore*/
/*const watch = require('gulp-watch'); */

gulp.task('default', function(done) {
	console.log("Gulp is running!");
	done();
});

// compile scss into css

function style() {
	// 1. where is my scss file
	return gulp.src('./scss/**/*.scss')
	// 2. pass that file through sass compiller
	.pipe(sass())
	// 3. where do I save the compiled CSS?
	.pipe(gulp.dest('./css'))
}

/*gulp.task('watch', () => {
    watch('./app/index.html', gulp.series('html'));
});*/

function html() {
	console.log("Some change in index.html happened!");
}




function watchFiles() {
	gulp.watch("./app/index.html", html);
}



exports.style = style;
exports.html = html;
exports.watch = watchFiles;



