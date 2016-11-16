var express = require('express');
var ejs = require('ejs');
var path = require('path');
var compression = require('compression');
var app = express();
app.use(compression());

var request = require('request');
app.use(express.static(__dirname));
app.use(express.static(path.join(__dirname, 'app')))
app.use(express.static(path.join(__dirname, 'build')))
app.get('/',function(req, res) {
    res.sendFile(path.join(__dirname, 'app', 'index.html'))
})

app.post('/token', function (req, res) {
    // res.send('Hello');
    var post = req.body;
    request.post('http://api.ruixinglong.net/token', function (error, response, body) {
        res.json(JSON.parse(body));
    }).form({
            "grant_type":client.grant_type,
            "username":post.username,
            "password":post.password,
            "client_id":client.client_id,
            "scope":client.scope
        }).auth(client.client_id, client.client_secret, true);
});

var PORT = process.env.PORT || 3000;
app.listen(PORT, function() {
    console.log('Production Express server running at localhost:' + PORT)
})