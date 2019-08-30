const gulp = require('gulp')
,sass = require('gulp-sass'),
postcss = require('gulp-postcss'),
browserSync = require('browser-sync').create(),
autoprefixer = require('autoprefixer');
/*Do not need to require gulp-watch anymore*/
/*const watch = require('gulp-watch'); */

gulp.task('default', function(done) {
	console.log("Gulp is running!");
	done();
});

// compile scss into css

function styles() {
	console.log("style is running!");
	// 1. where is my dev css files
	return gulp.src('./app/styles/style.css')
	// 2. pass that file through postcss compiller
	.pipe(postcss([autoprefixer]))
	// 3. where do I save the compiled CSS?
	.pipe(gulp.dest('./app/temp/styles'))
}

function scssFunction() {
	console.log("scssFunction is running!");
	// 1. where is my scss file
	return gulp.src('./scss/**/*.scss')
	// 2. pass that file through sass compiller
	.pipe(sass())
	// 3. where do I save the compiled CSS?
	.pipe(gulp.dest('./app/css'))
}

/*gulp.task('watch', () => {
    watch('./app/index.html', gulp.series('html'));
});*/

function html() {
	console.log("Some change in index.html happened!");
}




function watchFiles() {
	gulp.watch("./app/index.html", html);
	gulp.watch("./app/styles/**/*.css", styles);
}


exports.scss = scssFunction;
exports.styles = styles;
exports.html = html;
exports.watch = watchFiles;



