var express = require('express');
var bodyParser = require('body-parser');
var config = require('./config/config.js');
var mongoose = require('mongoose');
var morgan = require('morgan');
var app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json())

mongoose.Promise = global.Promise;
mongoose.connect(config.database);
app.set('supertoken', config.token);
app.use(morgan('dev'));

mongoose.connection.on('error', function(){
  console.log('Could not connect to database!!');
  process.exit();
});

mongoose.connection.once('open', function(){
  console.log('Success connected to database');
});

app.get('/', function(req, res){
  res.json({"message": "Welcome to application"})
});

require('./app/routes/user.routes.js')(app);
require('./app/routes/order.routes.js')(app);

app.listen(3000, function(){
  console.log("Server is running on port 3000");
});