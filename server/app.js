var express = require('express');
var cors = require('cors');
var bodyParser = require('body-parser');
var passport = require('passport');
var jwt = require('jsonwebtoken');
var sequelize = require('./db/config.js');
var users = require('./routes/users.js');
var items = require('./routes/items.js');
var path = require('path');

var app = express();

// Logger for dev environment
if(process.env.NODE_ENV !== 'production') {
  var morgan = require('morgan');
  app.use(morgan('dev'));
}


// Middleware
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use('/', express.static(path.resolve(__dirname, '../build')));
app.use(passport.initialize());

//Bring in passport strategy
require('./helper/passport.js')(passport);


// Router
app.use('/api/users', users);
app.use('/api/items', items);

// default route
app.use('/*', function (req, res) {
  res.redirect('/');
});

module.exports = app;
