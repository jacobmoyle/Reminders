const dotenv = require('dotenv');
dotenv.load();
process.env.NODE_ENV = process.env.NODE_ENV || 'development';

const express = require('express');
const app = express();

// route callbacks (essentially controller actions)
const createReminder = require('./routes/create');

app.get('/', function(req, res) {
  res.send('Hello World');
});

app.post('/create', createReminder(req, res))

app.listen(3000, function() {
  console.log('Listening on port 3000');
});