var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var db = require('../database');
var session = require('express-session');

var app = express();

app.use(express.static(path.join(__dirname, '../react-client/dist/')));
app.use(bodyParser.json());
app.use(session ({
  secret: 'let it be known',
  cookie: {maxAge: 6000000} // change this to make sessions shorter
}));

app.get('/companies', function (req, res) {
  if (!req.query.searchText && !req.query.tagCategory) {
    db.Company.getAllCompanies()
      .then(function(data) {
      // console.log('promise data line 24', data);
      res.status(201);
      res.json(data);
    })
    .catch(function(err) {res.sendStatus(500)})
  }
  var searchParams = {};

  // console.log('req query: ', req.query)
  searchParams.limit = req.query.limit || 500;
  searchParams.searchText = req.query.searchText;
  searchParams.tagCategory = req.query.tagCategory;
  db.Company.companyQuery(searchParams)
  .then(function(data) {
    // console.log('promise data line 24', data);
    res.status(201);
    res.json(data);
  })
  .catch(function(err) {
    console.log('Error in company query. server/index.js line 39', err);
    res.sendStatus(500);
  })
});

app.get('/users', function (req, res) {
  db.User.createUser(function(err, data) {
    if (err) {
      res.sendStatus(500);
    } else {
      res.json(data);
    }
  })
})

app.post('/users', function(req, res) {
  var userData = {username: 'clay', password: 'smart'};
  db.User.createUser(userData)
  .then(function() {res.sendStatus(201)})
  .catch(function(err) {res.sendStatus(500)})
})

app.listen(4568, function() {
  console.log('Known Project is listening on 4568');
});