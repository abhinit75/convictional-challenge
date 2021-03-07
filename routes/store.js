const express = require('express');
const { ValidatorsImpl } = require('express-validator/src/chain');
const store_router = express.Router();
const request = require('request');
const TranslateToInventoryDTO = require('../Models/Translators/TranslateToInventoryDTO');

// @route   GET api/store/inventory
// @desc    Get Product Inventor
// @access  Public
store_router.get('/store/inventory', (req, res) => {
    const errors = {};
    const options = {
      url:
      `${process.env.CONVICTIONAL_PRODUCT_API}`,
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Accept-Charset': 'utf-8',
      },
    };
    try {
      request(options, function (err, resp, body) {
        if (!body) {
          return res.status(404).json({ profile: 'There product is not in stock' });
        }
        let products = JSON.parse(body);
        let inventory_arr = [];
        for (var i = 0; i < products.length; i++) {
          for (var j = 0; j < products[i].variants.length; j++) {
            inventory_arr.push(TranslateToInventoryDTO(products[i].variants[j]));
          }
        }
        res.status(200).json(inventory_arr);
      });
    } catch (err) {
      res.status(404).json({ profile: 'There is no products' });
    }
  });
  
  module.exports = store_router;
  