var bcrypt = require('bcryptjs');
var jwt = require('jsonwebtoken');
var config = require('../../config/config.js');
var User = require('../models/user.model.js');

exports.create = function(req, res) {
  var hashedPassword = bcrypt.hashSync(req.body.password, 8);

  var user = new User({
      name: req.body.name,
      password: hashedPassword
  });

  var token = jwt.sign({ id: user._id }, config.token, {
    expiresIn: 86400
  });

  user.save(function(err, data){
    if(err) {
      console.log(err);
      res.status(500).send({message: "some error while creating user"});
    } else {
      res.send({data: data, token: token});
    }
  });
};

exports.login = function(req, res) {
  User.findOne({ name: req.body.name }, function (err, user) {
    if (err) return res.status(500).send('Error on the server.');
    if (!user) return res.status(404).send('No user found.');
    
    var passwordIsValid = bcrypt.compareSync(req.body.password, user.password);
    if (!passwordIsValid) return res.status(401).send({ auth: false, token: null });

    var token = jwt.sign({ id: user._id }, config.token, {
      expiresIn: 86400 
    });

    res.status(200).send({ auth: true, token: token });
  });
};

exports.logout = function(req, res) {
  res.status(200).send({ auth: false, token: null });
};