const http = require('http');
const url = require('url');
const express = require('express');

const app = express();

app.get('/', function (req, res) {
  res.json({ id:0, message: 'Hello World!' });
});

app.get('/test', function (req, res) {
  const extra = req.query.extra || null; //query param

  res.json({ id:1, message: 'Hello Test!', extra });
});

const server = app.listen(8081, function () {
  const host = server.address().address
  const port = server.address().port

  console.log("Example app listening at http://%s:%s", host, port)
});
