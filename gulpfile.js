var gulp= require("gulp");
var sass = require("gulp-sass");
var concat = require("gulp-concat");
var uglify = require("gulp-uglify");
var rename = require("gulp-rename");
var minfyCSS = require("gulp-minify-css");
var imagemin = require("gulp-imagemin");

gulp.task("copy-html",function(){
	gulp.src("*.html")
	.pipe(gulp.dest("D:\\PHPStudy\\WWW\\vake"));
});
gulp.task("copy-js",function(){
	gulp.src("js/**/*.js")
	.pipe(gulp.dest("D:\\PHPStudy\\WWW\\vake\\js"));
});

gulp.task("copy-images",function(){
	gulp.src("images/**/*")
	.pipe(gulp.dest("D:\\PHPStudy\\WWW\\vake\\images"));
});
gulp.task("sass",function(){
	gulp.src("sass/**/*.scss")
	.pipe(sass())
	.pipe(gulp.dest("D:\\PHPStudy\\WWW\\vake\\css"));
});
gulp.task("build",["copy-index","images","data"],function(){
	console.log("ok");
});

gulp.task("watch",function(){
	gulp.watch("*.html",["copy-html"]);
	gulp.watch("images/**/*",["copy-images"]);
	gulp.watch("js/**/*.js",["copy-js"]);
	gulp.watch("sass/**/*.scss",["sass"]);
});














gulp.task("copyHTML",function(){
	gulp.src("index.html").pipe(gulp.dest("D:\\PHPStudy\\WWW\\test"));
});
gulp.task("watchall",function(){
	gulp.watch("index.html",["copyHTML"]);
});
gulp.task("copy-index",function(){
	gulp.src("index.html")
	.pipe(gulp.dest("dist"));
});

gulp.task("images",function(){
	gulp.src("images/**/*")
	.pipe(gulp.dest("dist/images"));
});

gulp.task("data",function(){
	gulp.src(["xml/*.xml","json/*.json","!json/test.json"])
	.pipe(gulp.dest("dist/data"));
});

gulp.task("build",["copy-index","images","data"],function(){
	console.log("ok");
});

gulp.task("scripts",function(){
	gulp.src(["javascript/avalon.js","javascript/index.js"])
	.pipe(concat("cendor.js"))
	.pipe(uglify())
	.pipe(rename("vender.min.js"))
	.pipe(gulp.dest("dist/js"));
})
gulp.task("server",function(){
	connect.server({
		root:"dist",
		livereload:true
	});
});
