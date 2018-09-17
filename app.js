// Requires

var express = require('express');
var path = require('path');

var port = 3000
var app = express();

// View Engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');


// Home Route
app.get('/', function(req, res){
    res.render('index');
});

// Start Server
app.listen(port, function(){
    console.log('Server started on Port ' + port);
});