var mysql = require('mysql');

var connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  database: 'known'
});

var selectAll = function(callback) {
  connection.query('SELECT * FROM companies', function(err, results, fields) {
    if (err) {
      console.log('ERROR: ', err)
      callback(err, null)
    } else {
      callback(null, results)
    }
  });
};

module.exports.selectAll = selectAll;
