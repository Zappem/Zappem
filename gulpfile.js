var gulp 	   = require('gulp'),
	source     = require('vinyl-source-stream'),
    glob       = require('glob'),
    rename	   = require('gulp-rename'),
    es         = require('event-stream'),
    browserify = require('browserify'),
    sass       = require('gulp-sass');


gulp.task('default', function(){
	gulp.run('scss');
    gulp.run('js');
    gulp.watch('./resources/scss/**/*.scss', ['scss']);
    gulp.watch('./resources/js/**/*.js', ['js']);
});

gulp.task('scss', function(){
	gulp.src('./resources/scss/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./public/css'));
});

gulp.task('js', function(){

	glob('./resources/js/browserify/**/*.js', function(err, files) {
        if(err) console.log(err);

        var tasks = files.map(function(entry) {
            return browserify({ entries: [entry] })
                .bundle()
                .pipe(source(entry))
                .pipe(rename({dirname: ''}))
                .pipe(gulp.dest('./public/js'));
            });
    });

	gulp.src('./resources/js/*.js')
   		.pipe(gulp.dest('./public/js'));

});