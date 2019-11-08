const express = require('express');
const path = require('path');

const askDatabase = require('./askDatabase');
const rank = require('./rank');
const editMentorData = require('./editMentorData');

const app = express();

app.set('view engine', 'ejs');
app.use(express.static('./views'));
app.use(express.json());

app.get('/', function (req, res) {
  res.sendFile('/index.html')
});

app.get('/top', function (req, res) {
  askDatabase('SELECT name, explanation, knowledge, helpfulness, mark_sum FROM mentors', [])
    .then((result) => {
      res.status(200);
      res.setHeader('Content-Type', 'application/json');
      res.send(rank(result));
    })
    .catch((err) => {
      console.log(err.message);
      res.sendStatus(500);
    })
});

app.get('/mentors', function (req, res) {
  askDatabase('SELECT id, name FROM mentors', [])
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

app.get('/profile', function (req, res) {
  res.sendFile(path.resolve('views/profile.html'));
})

app.get('/mentor/:id', function (req, res) {
  askDatabase('SELECT * FROM mentors WHERE id = ?', [req.params.id])
    .then((result) => {
      res.status(200);
      res.setHeader('Content-Type', 'application/json');
      res.send(editMentorData(result[0]));
    })
    .catch((err) => {
      console.log(err.message);
      res.sendStatus(500);
    });
});



app.put('/mentor/:id', function (req, res) {
  askDatabase(`UPDATE mentors SET 
    explanation = explanation + ?,
    knowledge = knowledge + ?,
    helpfulness = helpfulness + ?,
    mark_sum = mark_sum + 1
    WHERE id = ?`,
    [
      req.body.explanation,
      req.body.knowledge,
      req.body.helpfulness,
      req.params.id
    ])
    .then((result) => {
      res.status(200);
      res.setHeader('Content-Type', 'application/json');
      res.send({ message: 'Thanks for your feedback!' });
    })
    .catch((err) => {
      console.log(err.message);
      res.sendStatus(500);
    });
});

app.post('/new', function (req, res) {
  askDatabase(`INSERT INTO mentors
  (name,
  class,
  fullstack,
  backend,
  devops,
  embedded,
  explanation,
  knowledge,
  helpfulness,
  mark_sum)
  VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, 1)`,
    [
      req.body.name,
      req.body.class,
      req.body.fullstack,
      req.body.backend,
      req.body.devops,
      req.body.embedded,
      req.body.explanation,
      req.body.knowledge,
      req.body.helpfulness
    ])
    .then((result) => {
      res.status(200);
      res.setHeader('Content-Type', 'application/json');
      res.send({ message: 'Thanks for the update!' });
    })
    .catch((err) => {
      console.log(err.message);
      res.sendStatus(500);
    });
});

module.exports = app;
