const express = require('express');

const router = express.Router();

const {product} = require('../models/productModel.js')
const {storelist} =require('../models/productModel.js')
const {manufacturer} =require('../models/productModel.js')

router.route("/product").get(product)
router.route("/storelist").get(storelist)
router.route("/manufacturer").get(manufacturer)

module.exports= router