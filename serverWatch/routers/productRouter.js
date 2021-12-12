const express = require('express');

const router = express.Router();

const {product} = require('../controller/productController.js')
const {storelist} =require('../controller/productController.js')
const {manufacturer} =require('../controller/productController.js')

router.route("/product").get(product)
router.route("/storelist").get(storelist)
router.route("/manufacturer").get(manufacturer)

module.exports= router