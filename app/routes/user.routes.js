module.exports = function(app){
  var users = require('../controllers/user.controller.js');

  // signup
  app.post('/signup', users.create);
 
  // login
  app.post('/login', users.login);
  
  // logout 
  app.get('/logout', users.logout);

}