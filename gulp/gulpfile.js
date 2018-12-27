const gulp = require('gulp');
const uglify = require('gulp-uglify');
const concat = require('gulp-concat');
const rename = require('gulp-rename');
const sass = require('gulp-sass');
const cssnano = require('gulp-cssnano');
const imagemin = require('gulp-imagemin');
gulp.task('js',function(){
	gulp.src('src/js/*.js').pipe(concat('index.min.js'))
	.pipe(uglify())
	.pipe(gulp.dest('dist'));
})
gulp.task('sass',()=>{
	gulp.src('./src/sass/*.scss')
	.pipe(sass())
	.pipe(rename({"suffix" : ".min"}))
	//.pipe(gulp.dest('./dist/css'));
})
gulp.task('default',function(){
	gulp.watch('./src/js/*.js',gulp.series('js'));
	gulp.watch('./src/sass/*.scss',['sass']);

})