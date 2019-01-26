var dotenv = require('dotenv');
dotenv.load();
process.env.NODE_ENV = process.env.NODE_ENV || 'development';

const express = require('express');
const app = express();

app.get('/', function(req, res) {
  res.send('Hello World');
});

app.listen(3000, function() {
  console.log('Listening on port 3000');
});