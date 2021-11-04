var mysql = require('mysql');


var dbConn = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'dongho',
});

module.exports = dbConn