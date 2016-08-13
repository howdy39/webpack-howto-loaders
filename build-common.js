var cp = require("child_process");
var tc = require("./template-common");
var fs = require("fs");

(function doIt() {
    cp.exec("webpack", function (error, stdout, stderr) {
        if(stderr)
            console.log(stderr);
        if (error !== null)
            console.log(error);
        try {
            var readme = tc(fs.readFileSync(require("path").join(process.cwd(), "template.md"), "utf-8"), process.cwd(), stdout.replace(/[\r\n]*$/, ""), "min");
        } catch(e) {
            console.log(stderr);
            throw e;
        }
        readme = tc(readme, process.cwd(), stdout.replace(/[\r\n]*$/, ""));
        readme = readme.replace(/\r\n/g, "\n").replace(/\r/g, "\n");
        fs.writeFile("README.md", readme, "utf-8", function() {});
    });
}());