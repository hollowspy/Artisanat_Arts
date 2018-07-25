var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
let passport = require('passport'),
  LocalStrategy = require('passport-local').Strategy;
var connection = require('./bdd/bdd');

var index = require('./routes/index');
var bestiaire = require('./routes/bestiaire');
var vegetal = require('./routes/vegetal');
var admin = require('./routes/admin');
var debug = require('debug')('back:server');
var http = require('http');
var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept'
  );
  next();
});

app.use('/', index);
app.use('/bestiaire', bestiaire);
app.use('/vegetal', vegetal);
app.use('/admin', admin);

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

// Passport

passport.use(
  'local',
  new LocalStrategy(
    {
      usernameField: 'email',
      passwordField: 'password',
      session: false,
    },
    (email, password, done) => {
      try {
        let sql = `SELECT * FROM admin WHERE mail = '${email}'`; 
        console.log(sql)
        connection.query(
          sql,
          (err, rows) => {
            if (err) {
              return done(err, 'pas encore bon');
            } else if (!rows[0]) {
              return done(null, false, {
                flash: 'No user found',
              });
            } else if (password === rows[0].password) {
              const user = rows[0].name; 
              console.log('App', user)            
              return done(null, user);
            } else {
              return donne(null, false, {
                flash: 'Mauvais mdp',
              });
            }
          }
        );
      } catch (e) {
        console.log('err', e);
      }
    }
  )
);

let server = app.listen(process.env.PORT || 4000, function() {
  console.log('Listening on port ' + server.address().port);
});

module.exports = app;
