const express = require('express');
const { ValidatorsImpl } = require('express-validator/src/chain');
const router = express.Router();
const request = require('request');
const TranslateToProductDTO = require('../Models/Translators/TranslateToProductDTO');
const TranslateToVariantDTO = require('../Models/Translators/TranslateToVariantDTO');
// Load Validation
//const validateProfileInput = require('../../validation/profile');

// Load Product Model

// @route   GET api/product
// @desc    Get All Products
// @access  Public
router.get('/product', (req, res) => {
  const errors = {};

  const options = {
    url:
      'https://my-json-server.typicode.com/convictional/engineering-interview/products',
    method: 'GET',
    headers: {
      Accept: 'application/json',
      'Accept-Charset': 'utf-8',
    },
  };

  try {
    request(options, function (err, resp, body) {
      if (!body) {
        return res.status(404).json({ profile: 'There are no products' });
      }
      let products = JSON.parse(body);
      var returnobj = [];
      for (var i = 0; i < products.length; i++) {
        returnobj.push(TranslateToProductDTO(products[i]));
      }
      res.status(200).json(returnobj);
    });
  } catch (err) {
    res.status(404).json({ profile: 'There are no profiles' });
  }
});

// @route   GET api/product/:productid
// @desc    Get Product by Id
// @access  Public
router.get('/product/:productId', (req, res) => {
  const errors = {};
  const options = {
    url:
      'https://my-json-server.typicode.com/convictional/engineering-interview/products',
    method: 'GET',
    headers: {
      Accept: 'application/json',
      'Accept-Charset': 'utf-8',
    },
  };
  try {
    request(options, function (err, resp, body) {
      if (!body) {
        return res.status(404).json({ profile: 'There are no products' });
      }
      let products = JSON.parse(body);
      let match_id = [];
      let id = req.params.productId;
      for (var i = 0; i < products.length; i++) {
        if (products[i].id == id) {
          match_id.push(TranslateToProductDTO(products[i]));
        }
      }
      res.status(200).json(match_id);
    });
  } catch (err) {
    res.status(404).json({ profile: 'There is no product for this id' });
  }
});

module.exports = router;
  