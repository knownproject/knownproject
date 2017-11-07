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

app.get('/companies', function(req, res) {
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
