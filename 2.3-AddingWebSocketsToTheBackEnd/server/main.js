/*global require, console */

var express = require('express');
var app     = express();
var server  = require('http').Server(app);

app.get('/', function (req, res) {
    "use strict";

    res.send("Hello world.");
    console.log("Something connected to express.");
});

server.listen(8080);
