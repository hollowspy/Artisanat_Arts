var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var cors = require('cors')
let passport = require('passport'),
  LocalStrategy = require('passport-local').Strategy;
const bcrypt = require('bcrypt');
var connection = require('./bdd/bdd');
var JWTStrategy = require('passport-jwt').Strategy,
    ExtractJWT = require('passport-jwt').ExtractJwt;

var index = require('./routes/index');
var carousel = require('./routes/api/carousel');
var bestiaire = require('./routes/api/bestiaire');
var vegetal = require('./routes/api/vegetal');
var auth = require('./routes/auth');
var admin = require('./routes/admin');
var mail = require('./routes/mail');
var search = require('./routes/search');
var upload_carousel = require('./routes/upload/upload_carousel')
var upload_bestiaire = require('./routes/upload/upload_bestiaire')
var upload_vegetal = require('./routes/upload/upload_vegetal')
var debug = require('debug')('back:server');
var app = express();
var router = express.Router();
var path = require('path');

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
// app.use(cors())

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "http://localhost:4200");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.header("Access-Control-Allow-Methods", "POST, GET, PUT, DELETE, OPTIONS");
  res.header("Access-Control-Allow-Credentials", true)
  next();
});

app.use('/', index);
app.use('/api/carousel/', carousel)
app.use('/api/bestiaire', bestiaire);
app.use('/api/vegetal', vegetal);
app.use('/mail', mail)
app.use('/auth', auth);
app.use('/admin', admin)
app.use('/search', search)
app.use('/upload/upload_carousel', upload_carousel)
app.use('/upload/upload_bestiaire', upload_bestiaire)
app.use('/upload/upload_vegetal', upload_vegetal)




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
            } else if (bcrypt.compareSync(password, rows[0].password)) {
              console.log('user connected', rows[0])
              const user = {
                id : rows[0].id,
                firstName : rows[0].firstName, 
                lastName : rows[0].lastName
              }
              console.log('App', user)            
              return done(null, user);
            } else {
              return done(null, false, {
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

passport.use(
  new JWTStrategy(
  {  
    jwtFromRequest: ExtractJWT.fromAuthHeaderAsBearerToken(),  
    secretOrKey   : 'mon_token_jwt',
  },  
  function (jwtPayload, cb){  
    return cb(null, jwtPayload);
  }  
));

passport.use(
  new JWTStrategy(
  {  
    jwtFromRequest: ExtractJWT.fromAuthHeaderAsBearerToken(),  
    secretOrKey   : 'tokenForgotMail',
  },  
  function (jwtPayload, cb){  
    return cb(null, jwtPayload);
  }  
));

let server = app.listen(process.env.PORT || 4000, function() {
  console.log('Listening on port ' + server.address().port);
});

module.exports = app;
