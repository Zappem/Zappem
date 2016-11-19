var gulp 		= require('gulp');
	sass 		= require('gulp-sass'),
	browserify 	= require('browserify'),
	source 		= require('vinyl-source-stream'),
	buffer     	= require('vinyl-buffer'),
	uglify 		= require('gulp-uglify'),
	del 		= require('del'),
	concat		= require('gulp-concat'),
	
	i 			= './src',
	o 			= './public',
	sassFiles 	= [i+'/scss/**/*.scss'],
	jsFiles 	= [i+'/js/app.js'],
	fontFiles 	= i+'/fonts/*';

	sassTask = function(){
		return gulp.src(sassFiles)
	    	.pipe(sass({outputStyle: 'compressed'}))
	    	.pipe(concat('app.css'))
    		.pipe(gulp.dest(o+'/css'));
	},

	jsTask = function(){
		var b = browserify({
			entries: jsFiles
		});

		return b.bundle()
	      .pipe(source('app.js'))
	      .pipe(buffer())
	      //.pipe(uglify())
	      .pipe(gulp.dest(o+'/js'));
	},

	fontsTask = function(){
		return gulp.src(fontFiles, {base: i+'/fonts'})
			.pipe(gulp.dest(o+'/fonts'));
	},


	watchTask = function(){
		gulp.watch(sassFiles, ['sass']);
		gulp.watch(jsFiles, ['js']);
		gulp.watch(fontFiles, ['fonts']);
	},

	clean = function(){
		return del(o+'/*');
	},

	logError = function(e){
		console.log(e);
	};

	gulp.task('watch', watchTask);
	gulp.task('sass', sassTask);
	gulp.task('js', jsTask);
	gulp.task('fonts', fontsTask);
	gulp.task('clean', clean);
	gulp.task('build', ['js', 'sass', 'fonts']);

	gulp.task('default', ['build', 'watch']);




