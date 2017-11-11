var knex = require('knex')({
  client: 'mysql',
  connection: {
    host : '127.0.0.1',
    user : 'root',
    password : '',
    database : 'known'
  }
});

var User = {};
var Company = {};

Company.companyQuery = function(searchParams) {

  console.log('searchPArams',searchParams);
  
  return knex('companies')
    .where('category_list', 'like', `%${searchParams.searchText}%`)
    .orWhere('category_list', 'like', `%${searchParams.tagCategory}%`)
    .orWhere('name', 'like', `%${searchParams.searchText}%`)
    .orderBy('count', 'desc')
    .limit(searchParams.limit);
};

Company.getAllCompanies = function() {
  return knex('companies');
}

User.createUser = function(userData) {
  console.log(userData);
  return knex('users').insert({username: userData.username, password: userData.password})
}

module.exports.User = User;
module.exports.Company = Company;