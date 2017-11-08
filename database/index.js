var mysql = require('mysql');

var connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  database: 'known'
});

var db_query = function(limit, callback) {
  connection.query('SELECT * FROM companies ORDER BY count DESC LIMIT ' + limit, function(err, results, fields) {
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

// var getCoProfile = function(callback) {
//   connection.query('SELECT name, homepage_url, facebook_url, twitter_url, linkedin_url, location_city, location_region, short_description, category_list, funding_total_usd, last_funding_at FROM companies')
// }

module.exports.selectCoNames = selectCoNames;
module.exports.db_query = db_query;
