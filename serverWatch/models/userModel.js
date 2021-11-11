const crypto = require("crypto");
const { v4: uuidv4 } = require('uuid');
const dbConn = require('../config/db.js')
const jwt = require("jsonwebtoken")

exports.signin  = (req, res) => {
  let email = req.body.email
  let password = req.body.password
  var token = crypto.randomBytes(20).toString('hex');
  let sql =`SELECT * FROM user WHERE email='${email}' and password='${password}'`
  dbConn.query(sql,(err, results)=>{
      if (results.length === 0) {
          res.json({ status: 'fail', error: err, message:"Incorrect user information"})
      }
      else {
          res.json({ status: 'success', token: token, data: results[0], message:'Logged in successfully' })
      }
  })
}

exports.signup = (req,res) =>{
  let IDUser = uuidv4()
  let email = req.body.email
  let password = req.body.password
  let username = req.body.username
  let imgUser = req.body.imgUser ? req.body.imgUser : 'https://cdn-icons-png.flaticon.com/512/149/149071.png'
  let data = {IDUser, email, password, username, imgUser}
  let sql =`INSERT INTO user (IDUser, email, password, username, imgUser) VALUES ('${IDUser}','${email}','${password}','${username}','${imgUser}')`
  let CheckSql =`SELECT * FROM user WHERE email='${email}'`

  dbConn.query(CheckSql,(err, results)=>{
      if (results.length > 0) {
          res.json({ status: 'fail', error: err, message:'This account is already in use'})
      }
      else {
          dbConn.query(sql,(err, results) => {
              try {
                  res.json({ status: 'success', data: data, message:'Successful account registration' })
              } catch (error) {
                  res.json({ status: 'fail', error: err})
              }
          })
      }
  })
}