var gulp = require('gulp'), watch = require('gulp-watch');

gulp.task('default', function(){
	console.log("hooray - gulp task !");
});

gulp.task('html', function () {
	console.log('Imagine sth useful happening');
});

gulp.task('styles', function () {
	console.log('Imagine post css run here');
});

gulp.task('watch', function(){
	watch('./app/index.html', function(){
		gulp.start('html');
	});
	watch('./app/assets/styles/**/*.css', function(){
		gulp.start('styles');
	});
});