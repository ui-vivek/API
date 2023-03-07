const mongoose = require('mongoose');

const inventorySchema = new mongoose.Schema({
  productid: {
    type: Number,
    required: true
  },
  quantity: {
    type: Number,
    required: true
  }
});

module.exports = inventorySchema;
