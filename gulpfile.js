const gulp = require('gulp');
const babel = require('gulp-babel');
const eslint = require('gulp-eslint');

gulp.task('default',function(){
    
    //ESLint를 실행합니다.
    gulp.src(["es6/**/*.js","public/es6/**/*.js"])
    .pipe(eslint())
    .pipe(eslint.format());

    //노드소스
    gulp.src("es6/**/*.js")
    .pipe(babel())
    .pipe(gulp.dest("dist"));
    
    //브라우저 소스
    gulp.src("public/es6/**/*.js")
    .pipe(babel())
    .pipe(gulp.dest("public/dist"));
})