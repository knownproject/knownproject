var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var companies = require('../database');

var app = express();

app.use(express.static(path.join(__dirname, '../react-client/dist/')));
app.use(bodyParser.json());

app.get('/companies', function (req, res) {
  companies.selectAll(function(err, data) {
    if(err) {
      res.sendStatus(500);
    } else {
      res.json(data);
    }
  });
});

<<<<<<< HEAD
app.get('/companyNames', function(req, res) {
=======
app.get('/names', function(req, res) {
>>>>>>> 35fb0e10d983bacb8fc3efbc40df1e810d63d78c
  companies.selectCoNames(function(err, data) {
    if (err) {
      res.sendStatus(500)
    } else {
      res.json(data);
    }
  });
});

app.listen(4568, function() {
  console.log('Known Project is listening on 4568');
});
