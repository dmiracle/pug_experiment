// Requires

var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');

var port = 3000
var app = express();

// View Engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));


// Middleware
/*
var logger = function(req, res, next){
    console.log('Middleware doing some middling . . . ');
    next();
}
*/
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));


/* in this we are passing some json array to the client
var people = [
    {
        name:'Goober',
        age: 30
    },
    {
        name:'Dylan',
        age: 40    
    }
]

app.get('/', function(req, res){
    res.json(people);
});
*/

// set static path
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', function(req, res){
//    res.json(people);
    res.render('index', {
        title: 'customers'
    });
});

app.listen(port, function(){
    console.log('Server started on Port ' + port);
});