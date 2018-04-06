module.exports = function(app){
  var orders = require('../controllers/order.controller.js');
  var VerifyToken = require('../../config/verifytoken');

  // create
  app.post('/orders', VerifyToken, orders.create);

  // show all
  app.get('/orders', VerifyToken, orders.findAll);

  // show by id
  app.get('/orders/:orderId', VerifyToken, orders.findOne);

  // update
  app.put('/orders/:orderId', VerifyToken, orders.update);

  // delete
  app.delete('/orders/:orderId', VerifyToken, orders.delete);

}