const accountSid = process.env.ACCOUNT_SID;
const authToken = process.env.AUTH_TOKEN;
const Twilio = require("twilio");

module.exports = new Twilio(accountSid, authToken);
