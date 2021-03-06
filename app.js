var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var mongoose = require('./config/mongoose');
var session = require('express-session');
var pasport = require('./config/passport');
var passport = require('passport');
var flash = require('connect-flash');
var db = mongoose();

var pass = pasport();

process.env.NODE_ENV = process.env.NODE_ENV || 'development';

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'app/views'));
app.set('view engine', 'ejs');

app.locals.title = "Sync";
// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: false }));

app.use(cookieParser());

app.use(express.static(path.join(__dirname, 'public')));

app.use(session({
  secret: "Barry is Savitar",

  resave: false,

  saveUninitialized: true
}));

app.use(flash());

app.use(passport.initialize());

app.use(passport.session());



//app.use('/users', users);
require('./app/routes/index')(app);
require('./app/routes/users')(app);
// catch 404 and forward to error handler

app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
