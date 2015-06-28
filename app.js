var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');


var routes = require('./routes/index');
var users = require('./routes/users');
//
var dbconnection = require('./dbtools/dbConnect')

//global db variable
var db = null;

//db url and db
var URL = 'mongodb://localhost:27017/iotdb';


var app = express();

//View HTML engin setup
app.engine('.html', require('ejs').__express);
app.set('views', __dirname + '/views');
app.set('view engine', 'html');

/*
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
*/

// uncomment after placing your favicon in /public
//app.use(favicon(__dirname + '/public/favicon.ico'));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', routes);
app.use('/users', users);

/**Added on 25/06/2015 @ 6:09am
 *  by Nawfal 
 *
 */

app.use('/static', express.static('./static'));
app.use('/images', express.static('./images'));
app.use('/lib', express.static('./lib'));

console.log('before connection');
db = dbconnection.connect(URL);
console.log('After connection');


// catch 404 and forward to error handler
app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
    app.use(function(err, req, res, next) {
        res.status(err.status || 500);
        res.render('error', {
            message: err.message,
            error: err
        });
    });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
        message: err.message,
        error: {}
    });
});


module.exports = app;