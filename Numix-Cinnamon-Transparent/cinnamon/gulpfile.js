var gulp        = require("gulp"),
    plumber     = require("gulp-plumber"),
    notify      = require("gulp-notify"),
    gutil       = require("gulp-util"),
    beep        = require("beepbeep"),
    shell       = require("gulp-shell"),
    fs          = require("fs"),
    rimraf      = require("rimraf"),
    sass        = require("gulp-sass");


var themesDir   = process.env.HOME+"/.themes/",
    theme       = "Numix-Cinnamon";


// Error handler
var onError = function (err) {
    var errorLine   = (err.line) ? "Line " + err.line : "",
        errorTitle  = (err.plugin) ? "Error in plugin: [ " + err.plugin + " ]" : "Error";

    notify.logLevel(0);
    notify({
            title: errorTitle,
            message: errorLine
    }).write(err);

    beep();

    gutil.log(gutil.colors.red("\n"+errorTitle+"\n\n", err.message));

    this.emit("end");
};


// Compile sass
gulp.task("sass", function () {
    return gulp.src("sass/cinnamon.scss")
        .pipe(plumber({ errorHandler: onError }))
        .pipe(sass({ outputStyle: "expanded" }))
        .pipe(gulp.dest("."));
});


// Wait for sass to compile & reload theme
gulp.task("reloadTheme", ["sass"], shell.task([
    "gsettings set org.cinnamon.theme name default",
    "gsettings set org.cinnamon.theme name "+theme
]));

// Default task
gulp.task("default", function() {
    gulp.start("reloadTheme");
});
