/*
*  Copyright (c) Microsoft. All rights reserved. Licensed under the MIT license.
*  See LICENSE in the source repository root for complete license information.
*/

var express = require('express');
var app = express();
var morgan = require('morgan');
var path = require('path');

// Initialize variables.
var port = 6421; // process.env.PORT || 8080;

// Configure morgan module to log all requests.
app.use(morgan('dev'));

// Set the front-end folder to serve public assets.
console.log(path.join(__dirname, '../../out'));
app.use("/out", express.static(path.join(__dirname, "../../out")));
app.use("/bower_components", express.static(path.join(__dirname, 'bower_components')));

// Set up our one route to the index.html file.
app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname + '/index.html'));
});

app.get('/msal.js', function (req, res) {
    res.sendFile(path.join(__dirname + '/msal.js'));
});

app.get('/jwt-decode.js', function (req, res) {
    res.sendFile(path.join(__dirname + '/jwt-decode.js'));
});

// Start the server.
app.listen(port);
console.log('Listening on port ' + port + '...'); 