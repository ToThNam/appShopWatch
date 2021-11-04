const dbConn = require('../config/db.js')

exports.product = (req, res) => {
  dbConn.query('SELECT * FROM product', function (error, results, fields) {
      if (error) throw error;
      return res.send({ error: false, data: results, message: 'product list.' });
  });
};
exports.storelist = (req, res) => {
  dbConn.query('SELECT * FROM storelist', function (error, results, fields) {
      if (error) throw error;
      return res.send({ error: false, data: results, message: 'product list.' });
  });
};
exports.manufacturer = (req, res) => {
  dbConn.query('SELECT * FROM manufacturer', function (error, results, fields) {
      if (error) throw error;
      return res.send({ error: false, data: results, message: 'manufacturer list.' });
  });
}