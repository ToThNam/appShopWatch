const express = require('express');
const {signin} = require('../models/userModel.js')
const {signup} =require('../models/userModel.js')

const router = express.Router();

router.route("/login").post(signin)
router.route("/SignUp").post(signup)
module.exports= router