var gulp = require('gulp');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
/*
ajoute des préfixe d'extention automatiquement comme -o- , -webkit- ...etc
 */
var sourcemaps = require('gulp-sourcemaps');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');
var livereload = require('gulp-livereload');
var path = {
	src : {
		styles: 'src/sass/',
		scripts: 'src/js/',
		images: 'src/images/'
	},
	dist : {
		styles: 'dist/css/',
		scripts: 'dist/js/'
	}
}

gulp.task('sass', function(){
	//console.log('Tâche sass ok');
	return gulp.src(path.src.styles + 'main.scss')
		.pipe(sourcemaps.init())
		.pipe(autoprefixer({
					browser: ['last 3 versions']
				}))
		.pipe(sass({
			outputStyle : 'compressed'
		}).on('error', sass.logError))
		.pipe(sourcemaps.write('../maps'))
		.pipe(gulp.dest(path.dist.styles))
		.pipe(livereload());
});

/*!
 * Scripts : concatène et compresse les JS
 */
 gulp.task('scripts', function(){
return gulp.src([
			path.src.scripts + 'vendors/*.js',
			path.src.scripts + 'plugins/*.js',
			path.src.scripts + '*.js'
			])
			.pipe(sourcemaps.init())
			.pipe(uglify({
				preserveComments: 'some'
			}))
			.pipe(concat('main.min.js'))
			.pipe(sourcemaps.write('../maps'))
			.pipe(gulp.dest(path.src.scripts));
 });

/**
 * Tâche reload -> rechargement auto de la page dans le navigateur
 */
 gulp.task('livereload', function(){
 	livereload();
 });


gulp.task('watch', function(){
	livereload.listen();
	gulp.watch('src/sass/**/*.scss', ['sass']);
	gulp.watch('src/js/**/*.js', ['scripts']);
});

gulp.task('build', ['sass', 'scripts'], function(){});