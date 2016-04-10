'use strict';

var app = require('./app'),
	db = require('./db');

var port = 3000;
var server = app.listen(port, function () {
	console.log('HTTP server patiently listening on port', port);
});

module.exports = server;
