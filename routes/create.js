module.exports = {
    hello: function(req, res) {
        if (!req.body.name) {
            res.send('An error occurred: Name is a required paramter');
        }
    }
};


// const accountSid = 'ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX';
// const authToken = 'your_auth_token';
// const client = require('twilio')(accountSid, authToken);

// client.calls
//   .create({
//     url: 'http://demo.twilio.com/docs/voice.xml',
//     to: '+14155551212',
//     from: '+15017250604',
//   })
//   .then(call => process.stdout.write(call.sid));