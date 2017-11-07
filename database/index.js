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

var selectCoNames = function(callback) {
  connection.query('SELECT crunchbase_uuid, name FROM companies', function(err, results, fields) {
    if (err) {
      callback(err, null)
    } else {
      callback(null, results)
    }
  });
}

module.exports.selectCoNames = selectCoNames;
module.exports.selectAll = selectAll;
