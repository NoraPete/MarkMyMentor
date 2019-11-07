const express = require('express');
const path = require('path');

const askDatabase = require('./askDatabase');
const app = express();

app.set('view engine', 'ejs');
app.use(express.static('./views'));
app.use(express.json());

app.get('/', function(req, res) {
  res.sendFile('/index.html')
});

app.get('/top', function(req, res) {

});

app.get('/mentors', function(req, res) {
  askDatabase('SELECT * FROM mentors', [])
  .then((result) => {
    res.status(200);
    res.setHeader('Content-Type', 'application/json');
    res.send(result);
  })
  .catch((err) => {
    console.log(err.message);
    res.sendStatus(500);
  });
});

app.get('/mentor/:id', function(req, res) {

});

app.put('/mentor/:id', function(req, res) {

});

app.post('/new', function(req, res) {

});

module.exports = app;