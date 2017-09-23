// Setup requires and app
var express = require('express');
var app = express();
var userAgent = require('useragent');


// route for GET to request client data and respond with JSON
app.get("/", function (req, res) {
    // setup user-agent
    var agent = userAgent.parse(req.headers['user-agent']);

    // set OS, IP Address, and Language variables
    var os = agent.os.toString();
    var ip = req.headers['x-forwarded-for'].split(",")[0] || req.connection.remoteAddress;
    var language = req.headers["accept-language"].split(",")[0];

    // send acquired information as JSON
    res.json({
        ipaddress: ip,
        language: language,
        software: os
    });
});


// Start server
app.listen(3000, function() {
    console.log("App is listening..");
});