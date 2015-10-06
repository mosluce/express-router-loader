/**
 * Created by mosluce on 15/9/22.
 */
var path = require('path');
var fs = require('fs');

function createRouter(router, dir, prefix) {
    var files = fs.readdirSync(dir);

    for (var i in files) {
        var file = files[i];

        if (file === 'index.js') continue;
        if (!/\.js$/.test(file)) {

            var nextlv = path.join(dir, file);
            var stat = fs.statSync(nextlv);

            if (stat.isDirectory()) {
                createRouter(router, path.join(dir, file), (prefix || '') + '/' + file);
            }

            continue;
        }

        var r = require(path.join(dir, file));
        var n = (prefix || '') + '/' + file.replace(/\.js$/, '');

        router.use(n, r);
    }

    return router;
}

module.exports = createRouter;