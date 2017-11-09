var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var db = require('../database');

var app = express();

app.use(express.static(path.join(__dirname, '../react-client/dist/')));
app.use(bodyParser.json());

app.get('/companies', function (req, res) {
  var limit = req.query.limit || 500;
  var searchText = req.query.searchText || null;
  var tagCategory = req.query.tagCategory || null;
  db.companyQuery(limit, searchText, tagCategory, function(err, data) {
    if (err) {
      res.sendStatus(500);
    } else {
      res.json(data);
    }
  });
});

app.get('/users', function (req, res) {
  db.userQuery(function(err, data) {
    if (err) {
      res.sendStatus(500);
    } else {
      res.json(data);
    }
  })
})

app.listen(4568, function() {
  console.log('Known Project is listening on 4568');
});
