// --------------------- // ---------------------
// Setup Shit
// --------------------- // ---------------------
const dotenv = require("dotenv");
dotenv.load();
process.env.NODE_ENV = process.env.NODE_ENV || "development";

const express = require("express");
const app = express();

// --------------------- // ---------------------
// Controller (function) Imports
// --------------------- // ---------------------
const createReminder = require("./route-handlers/reminders");

// --------------------- // ---------------------
// Actual Routoing
// --------------------- // ---------------------

app.get("/", function(req, res) {
  res.send("Hello World");
});

app.post("/create", createReminder(req, res));

app.listen(3000, function() {
  console.log("Listening on port 3000");
});
