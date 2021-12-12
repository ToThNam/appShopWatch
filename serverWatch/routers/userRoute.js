const express = require('express');
const {signin} = require('../controller/userController.js')
const {signup} =require('../controller/userController.js')

const router = express.Router();

router.route("/login").post(signin)
router.route("/SignUp").post(signup)
module.exports= router 