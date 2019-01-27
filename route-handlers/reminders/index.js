var accountSid = process.env.ACCOUNT_SID;
var authToken = process.env.AUTH_TOKEN;
var twilio = require("twilio");
var client = new twilio(accountSid, authToken);

module.exports = {
  create: function(req, res) {
    client.messages
      .create({
        body: req.body,
        to: "+17755443609", // Text this number
        from: process.env.PHONE_NUMBER // From a valid Twilio number
      })
      .then(message => {
        // not sure we need anything here
        // maybe make a record that we sent a text?
        // maybe update some values
        console.log(message.sid);
      })
      .catch(err => {
        console.log(err);
        // handle Error here... webhook saying message failed?
      });
  }
};
