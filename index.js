/**
 * Created by mosluce on 15/9/22.
 */
var path = require('path');
var fs = require('fs');
var Promise = require('bluebird');

module.exports = function (dir) {
    var express = require('express');
    var router = express.Router();

    var files = fs.readdirSync(dir);

    for (var i in files) {
        var file = files[i];

        if (file === 'index.js') continue;
        if (!/\.js$/.test(file)) continue;

        var r = require(path.join(dir, file));
        var n = '/' + file.replace(/\.js$/, '');

        router.use(n, r);
    }

    return router;
};