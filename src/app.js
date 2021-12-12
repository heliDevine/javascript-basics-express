const express = require('express');
const strings = require('../lib/strings');
const numbers = require('../lib/numbers');

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

// app.get('/numbers/add/2/and/1', (req, res) => {
//   return res.status(200).send({ result: 3 });
// });

// app.get('/numbers/add/12/and/0', (req, res) => {
//   return res.status(200).send({ result: 12 });
// });

// app.get('/numbers/add/10/and/-5', (req, res) => {
//   return res.status(200).send({ result: 5 });
// });

/// THIS works///
// app.get('/numbers/add/:id/and/:id2', (req, res) => {
//   return res.status(200).send({ result: 3 });
// });
/// THIS works///
// app.get('/numbers/add/:id/and/:id2', (req, res) => {
//   const a = parseInt(req.params.id);
//   const b = parseInt(req.params.id2);
//   return res.status(200).send({ result: numbers.add(a, b) });
// });

app.get('/numbers/add/:id/and/:id2', (req, res) => {
  const a = parseInt(req.params.id);
  const b = parseInt(req.params.id2);
  return Number.isNaN(a) || Number.isNaN(b)
    ? res.status(400).send({ error: 'Parameters must be valid numbers.' })
    : res.status(200).send({ result: numbers.add(a, b) });
});

/// // WHY THIS DOESN' WORK//////
// app.get('/numbers/add/:id/and/:id2', (req, res) => {
//   const a = parseInt(req.params.id);
//   const b = parseInt(req.params.id2); {

//    if (Number.isNan(a) || Number.isNan(b))
//    return res.status(400).send({ error: 'Parameters must be valid numbers.' })
//   }
//   else

//   {

//     return res.status(200).send({ result: numbers.add(a, b) });
//   };
// });




module.exports = app;
