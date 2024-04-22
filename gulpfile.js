let gulp = require('gulp');
//var less = require('gulp-less');
let babel = require('gulp-babel');
let concat = require('gulp-concat');
let uglify = require('gulp-uglify');
let  ejs =  require("gulp-ejs");
let log = require('fancy-log')
//let consolidate = require('gulp-consolidate');
//const sourcemaps = require('gulp-sourcemaps');
let rename = require('gulp-rename');
//var cleanCSS = require('gulp-clean-css');
//var del = require('del');

let paths = {
    scripts: {
        src: 'public/assets/theme_assets/js/*.js',
        dest: 'build/js/'
    }
};

function scripts() {
    return gulp.src(paths.scripts.src, { sourcemaps: false })
        //.pipe(babel())
        //.pipe(javascriptObfuscator({compact: false}))
        .pipe(uglify({ mangle: true, outSourceMap: false, compress: { drop_console: true } })
            .pipe(gulp.dest(paths.scripts.dest)));
}

function watch() {
    gulp.watch(paths.scripts.src, scripts);
    // gulp.watch(paths.styles.src, styles);
}

async function render(){
    console.log(__dirname)
    gulp.src(__dirname+'/views/panel/tools/page/skeleton.ejs')
        .pipe(ejs({ title: 'gulp-ejs' }))
        .pipe(rename({extname: '.html' }))
        .pipe(gulp.dest('./dist'))
}

/*
 * Specify if tasks run in series or parallel using `gulp.series` and `gulp.parallel`
 */

/*
 * You can use CommonJS `exports` module notation to declare tasks
 */
//exports.clean = clean;
//exports.styles = styles;
exports.scripts = scripts;
exports.watch = watch;
exports.build = render;
/*
 * Define default task that can be called by just running `gulp` from cli
 */
exports.default = render;