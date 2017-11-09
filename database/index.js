var mysql = require('mysql');

var connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  database: 'known'
});

var companyQuery = function(limit, searchText, tagCategory, callback) {
  var searchString = `SELECT * FROM companies `;
  if (searchText) {
    searchString += `WHERE name LIKE "%${searchText}%" `;
  }
  if (tagCategory) {
    searchString += `WHERE category_list LIKE "%${tagCategory}%" `;
  }
  searchString += `ORDER BY count DESC LIMIT ${limit};`
  connection.query(searchString, function(err, results, fields) {
    if (err) {
      console.log('ERROR: ', err)
      callback(err, null)
    } else {
      callback(null, results)
    }
  });
};

var userQuery = function(callback) {

}

var createUser = function(callback) {

}

module.exports.companyQuery = companyQuery;
module.exports.userQuery = userQuery;
