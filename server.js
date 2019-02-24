// --------------------- // ---------------------
// Setup Shit
// --------------------- // ---------------------
const dotenv = require("dotenv");

dotenv.load();
process.env.NODE_ENV = process.env.NODE_ENV || "development";

const bodyParser = require("body-parser");
const express = require("express");
global.Promise = require("bluebird");

const app = express();
app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

const emojic = require("emojic");

const mongoose = require("mongoose");
mongoose
  .connect("mongodb://localhost:27017/reminders", {
    useNewUrlParser: true
  })
  .then(() => {
    const successEmoji = "\uF600";
    console.log(`DB Connect: Success`, emojic.whiteCheckMark);
  })
  .catch(() => {
    console.error("DB Connection: Failure", emojic.x);
  });

// --------------------- // ---------------------
// Controller (function) Imports
// --------------------- // ---------------------
// const { update } = require("./route-handlers/reminders");
const { create } = require("./route-handlers/transactions");

// --------------------- // ---------------------
// Actual Routoing
// --------------------- // ---------------------

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.post("/create", create);

// app.put("/update", update);

// start up server
app.listen(3000, () => {
  console.log("Listening on port 3000");
});
