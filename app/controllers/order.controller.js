var Order = require('../models/order.model.js');

exports.create = function(req, res) {
    var order = new Order({
      name: req.body.name,
      price: req.body.price,
      imageUrl: req.body.imageUrl
    });

    order.save(function(err, data) {
        if(err) {
            console.log(err);
            res.status(500).send({message: "Some error occurred while creating the Order."});
        } else {
            res.send(data);
        }
    });
};

exports.findAll = function(req, res) {
  Order.find(function(err, orders){
    if(err) {
      console.log(err);
      res.status(500).send({message: "some error while show all orders."});
    } else {
      res.send(orders);
    }
  });
};

exports.findOne = function(req, res) {
  Order.findById(req.params.orderId, function (err, order) {
    if(err) {
      console.log(err);
      return res.status(500).send({message: "Error show by id" + req.params.orderId});
    }

    if(!order) {
      return res.status(404).send({message: "Order not found with id" + req.params.orderId })
    }

    res.send(order);
  });
};

exports.update = function(req, res) {
  Order.findById(req.params.orderId, function(err, order) {
    if(err) {
      console.log(err);
      return res.status(500).send({message: "Error show by id" + req.params.orderId});
    }

    if(!order) {
      return res.status(404).send({message: "Order not found with id" + req.params.orderId })
    }

      order.name = req.body.name,
      order.price = req.body.price,
      order.imageUrl = req.body.imageUrl,

    order.save(function(err, data) {
      if(err) {
        res.status(500).send({message: "Could not update order with id" + req.params.orderId })
      } else {
        res.send(data);
      }
    });
  });
};

exports.delete = function(req, res) {
  Order.findByIdAndRemove(req.params.orderId, function(err, order) {
    if(err) {
      console.log(err);
      return res.status(500).send({message: "Could not delete order with id" + req.params.orderId });
    }

    if(!order){
      return res.status(404).send({message: "Order not found with id" + req.params.orderId});
    }

    res.send({message: "Order deleted success!"})
  });
};