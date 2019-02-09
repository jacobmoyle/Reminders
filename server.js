// --------------------- // ---------------------
// Setup Shit
// --------------------- // ---------------------
const dotenv = require('dotenv');

dotenv.load();
process.env.NODE_ENV = process.env.NODE_ENV || 'development';

const express = require('express');

const app = express();

// --------------------- // ---------------------
// Controller (function) Imports
// --------------------- // ---------------------
const { create } = require('./route-handlers/reminders');

// --------------------- // ---------------------
// Actual Routoing
// --------------------- // ---------------------

app.get('/', (req, res) => {
  res.send('Hello World');
});

app.post('/create', create);

// start up server
app.listen(3000, () => {
  console.log('Listening on port 3000');
});
