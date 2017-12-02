var gulp = require("gulp")
var git = require("gulp-git")
gulp.task("init",function(){
    git.init(function(err){
        if(err) throw err;
    })
})
gulp.task("add",function(){
    return gulp.src("./*")
        .pipe(git.add())
})
gulp.task("commit",function(){
    return gulp.src("./*")
        .pipe(git.commit('first commit'))
})
gulp.task('addremote',function(){
    git.addRemote('origin',"git@github.com:wangyuncong/gulp-git.git",function(err){
        if(err) throw err;
    })
})
gulp.task("removeremote",function(){
    git.removeRemote('origin',function(err){
        if(err) throw err;
    })
})
gulp.task('push',function(){
    git.push('origin','master',function(err){
        if(err) throw err;
    })  
})