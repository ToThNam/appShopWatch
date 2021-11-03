var express = require('express');
var app = express();
var http = require("http");
var bodyParser = require('body-parser');
var mysql = require('mysql');
const jwt = require("jsonwebtoken")
var crypto = require("crypto");
var router =express.Router();
const { v4: uuidv4 } = require('uuid');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

var dbConn = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'dongho',
});
dbConn.connect();
app.get('/storelist', function (req, res) {
    dbConn.query('SELECT * FROM storelist', function (error, results, fields) {
        if (error) throw error;
        return res.send({ error: false, data: results, message: 'product list.' });
    });
});
app.get('/product', function (req, res) {
    dbConn.query('SELECT * FROM product', function (error, results, fields) {
        if (error) throw error;
        return res.send({ error: false, data: results, message: 'product list.' });
    });
});
app.get('/manufacturer', function (req, res) {
    dbConn.query('SELECT * FROM manufacturer', function (error, results, fields) {
        if (error) throw error;
        return res.send({ error: false, data: results, message: 'manufacturer list.' });
    });
});

app.post('/user/login', function (req, res) {
    let email = req.body.email
    let password = req.body.password
    var token = crypto.randomBytes(20).toString('hex');
    let sql =`SELECT * FROM user WHERE email='${email}' and password='${password}'`
    dbConn.query(sql,(err, results)=>{
        if (results.length === 0) {
            res.json({ status: 'fail', error: err})
        }
        else {
            res.json({ status: 'success', token: token, data: results[0], message:'Logged in successfully' })
        }
    })
});

app.post('/user/SignUp',function(req,res){
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


})

app.listen(3000, function () {
    console.log('Node app is running on http://localhost:3000/');
});
module.exports = app;
