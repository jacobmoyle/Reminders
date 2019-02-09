const accountSid = process.env.ACCOUNT_SID;
const authToken = process.env.AUTH_TOKEN;
const Twilio = require('twilio');

const client = new Twilio(accountSid, authToken);

module.exports = {
  create: (req, res) => {
    client.messages
      .create({
        body: req.body,
        to: '+17755443609', // Text this number
        from: process.env.PHONE_NUMBER, // From a valid Twilio number
      })
      .then((message) => {
        console.log(message);
        // not sure we need anything here
        // maybe make a record that we sent a text?
        // maybe update some values
        console.log(message.sid);
      })
      .catch((err) => {
        console.log(err);
        // handle Error here... webhook saying message failed?
      });
  },
};
