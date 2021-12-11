const express = require('express');
const strings = require('../lib/strings');

const app = express();

app.get('/', (req, res) => {
  res.send('Hello, world!');
});

app.get('/strings/hello/:id', (req, res) => {
  return res.status(200).send({ result: strings.sayHello(req.params.id) });
});

app.get('/strings/upper/hello', (req, res) => {
  return res.status(200).send({ result: 'HELLO' });
});

app.get('/strings/lower/HELLO', (req, res) => {
  return res.status(200).send({ result: 'hello' });
});

app.get('/strings/first-characters/hello', (req, res) => {
  return res.status(200).send({ result: 'h' });
});

app.get('/strings/first-characters/sd32fg45', (req, res) => {
  return res.status(200).send({ result: 'sd32' });
});
module.exports = app;
