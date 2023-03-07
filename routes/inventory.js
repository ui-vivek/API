const express = require('express');
const router = express.Router();
const Inventory = require('../models/inventory');

router.post('/updateInventory', async (req, res) => {
  const payload = req.body;
  try {
    const updatePromises = payload.map(async (product) => {
      const { productId, quantity, operation } = product;
      const updateQuantity = operation === 'add' ? quantity : -quantity;
      const updatedProduct = await Inventory.findOneAndUpdate(
        { productId },
        { $inc: { quantity: updateQuantity } },
        { new: true },
      );
      return updatedProduct;
    });
    const updatedProducts = await Promise.all(updatePromises);
    res.json(updatedProducts);
  } catch (error) {
    console.error(error);
    res.status(500).send('Error updating inventory');
  }
});

module.exports = router;
