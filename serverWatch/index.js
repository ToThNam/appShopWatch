var express = require('express');
var app = express();
var bodyParser = require('body-parser');
const dbConn = require('./config/db.js')

const user = require('./routers/userRoute.js')
const product = require('./routers/productRouter.js')

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));
dbConn.connect();

app.use("/user", user);
app.use(product)

app.listen(3000, function () {
    console.log('Node app is running on http://localhost:3000/');
});
module.exports = app;
