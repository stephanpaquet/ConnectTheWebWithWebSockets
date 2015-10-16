/*global require, console */

var express = require('express');
var app     = express();
var server  = require('http').Server(app);
var io      = require('socket.io')(server);

// app.get('/', function (req, res) {
//     "use strict";
//
//     res.send("Hello world.");
//     console.log("Something connected to express.");
// });

app.use(express.static('app'));

io.on('connection', function (socket) {
    "use strict";

    console.log("Something connected to Socket.io");
    socket.emit("messages", ["Hello", "Hi there", "How are you?"]);
});

server.listen(8080);
