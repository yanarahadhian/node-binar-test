var mongoose = require('mongoose');

var OrderSchema = mongoose.Schema({
  name: String,
  price: String,
  imageUrl: String
}, {
  timestamps: true
});

module.exports = mongoose.model('Order', OrderSchema);