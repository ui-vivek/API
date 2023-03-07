const mongoose = require('mongoose');
const inventorySchema = require('./inventorySchema');

const Inventory = mongoose.model('Inventory', inventorySchema);

module.exports = Inventory;
