import { Reminder } from '../../models';

const accountSid = process.env.ACCOUNT_SID;
const authToken = process.env.AUTH_TOKEN;
const Twilio = require('twilio');
const uuidv4 = require('uuid/v4');

const client = new Twilio(accountSid, authToken);

module.exports = {
  // Make a new reminder in DB
  // Confirm creation w/ user via text
  create: (req, res) => {
    // find user number and text body via request?
    // const { message, number } = req
    const reminder = new Reminder({
      uuid: uuidv4(),
      text: req.body.text,
    });

     client.messages
       .create({
         body: message,
         to: "+17755443609", // Text this number
         from: process.env.PHONE_NUMBER // From a valid Twilio number
       })
       .then((message) => {
         console.log(message);
         const record = reminder.save((err, reminder) => {
           if (err) {
             // how do we want to handle this?
             // have Twilio send SMS that something went wrong?
             console.log("error with saving record", err);
           } else {
             // extract util function to build message text
             const message = `${
               reminder.text
             } created.\n\nReference with ${reminder.uuid}`;
           }
         });
         // maybe make a record that we sent a text?
         // maybe update some values
         console.log(message.sid);
       })
       .catch((err) => {
         console.log(err);
         // handle Error here... webhook saying message failed?
       });

    res.json(record);
  },
  // Find reminder in DB and update status
  // Confirm update w/ user via text
  update: (req, res) => {
    client.messages
      .create({
        body: req.body,
        to: '+17755443609', // Text this number
        from: process.env.PHONE_NUMBER // From a valid Twilio number
      })
      .then((message) => {
        console.log(message);
        // maybe make a record that we sent a text?
        // maybe update some values
        console.log(message.sid);
      })
      .catch((err) => {
        console.log(err);
        // handle Error here... webhook saying message failed?
      });
  }
};
