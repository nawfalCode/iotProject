var express = require('express'); //**
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var app = express();

var io = require('socket.io');


//todo Add WebSocket as alternative to Socket.io
// todo: define relative devices
// todo: define interested devices

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

/**
 * Set Html Engine
 */

app.engine('.html', require('ejs').__express);
app.set('views', __dirname + '/views');
app.set('view engine', 'html');


var devices = require('./routes/devices');
app.use('/api', devices);

app.use('/', function(req, res) {
    res.render('socket');
});

//global db variable
var dbName = "iotdb";
//db url and db
var URL = 'mongodb://localhost:27017/' + dbName;
mongoose.connect(URL);

module.exports = app;