
var express = require('express');
var https = require('https');

var app = express();

app.get('/', function(req, res){
    res.send('Hello World');
});

app.listen(3000);

app.get('/whatup', function(req, res){
    var json = {
        'name' : 'myname',
        'age' : 29,
        'job': 'student',
        'information': 'nothing much'
    };
    res.send(json);
});

