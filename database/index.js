var mysql = require('mysql');

var connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  database: 'known'
});

var selectAll = function(callback) {
  connection.query('SELECT * FROM companies ORDER BY name LIMIT 50', function(err, results, fields) {
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
module.exports.selectAll = selectAll;
