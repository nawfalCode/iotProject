var express = require('express'); //**
//var path = require('path');
//var dbModel = require('./models/device_model.js');
//var favicon = require('serve-favicon');
//var logger = require('morgan');
//var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var app = express();


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));



var devices = require('./routes/devices');
app.use('/api', devices);



//var routes = require('./routes/index');
//var users = require('./routes/users');
//
//var dbconnection = require('./dbtools/dbConnect')
//var api = require('./controllers/device_controller');

//global db variable
var dbName = "iotdb";
//db url and db
var URL = 'mongodb://localhost:27017/' + dbName;
mongoose.connect(URL);

/*
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function(callback) {

    var ourModel = dbModel.getModel(mongoose);
    console.log(JSON.stringify(ourModel));
});



*/

//View HTML engin setup
/*
app.engine('.html', require('ejs').__express);
app.set('views', __dirname + '/views');
app.set('view engine', 'html');
*/
/*
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
*/

// uncomment after placing your favicon in /public
//app.use(favicon(__dirname + '/public/favicon.ico'));
//app.use(logger('dev'));


/*
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', routes);
app.use('/users', users);
*/
/**Added on 25/06/2015 @ 6:09am
 *  by Nawfal 
 *
 */
/*
app.use('/static', express.static('./static'));
app.use('/images', express.static('./images'));
app.use('/lib', express.static('./lib'));

console.log('before connection')
*/
/*
dbconnection.connect(URL, function(response) {
    db = response;
    console.log(' the db is :' + db);
    next();
});
*/
/*
var next = function() {

    if (db !== null) {
        console.log('adding new item');
        api.post({
            deviceId: 234,
            deviceType: 'Car'
        });
        console.log('adding new item: Done');
        console.log('start listing');
        //      api.list();

    }
}

console.log('After connection');
*/

//console.log('schema is :' + deviceSchema);

// catch 404 and forward to error handler
/*
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
app.get('/thread', api.list);
*/
module.exports = app;