const client = require("./client");

const handleSuccess = async transaction => {
  const { phoneNumber, message } = transaction;

  // TODO: This action should create an outbound transaction
  // Inform User of succes
  const foo = client.messages.create({
    from: process.env.PHONE_NUMBER, // From a valid Twilio number
    to: phoneNumber,
    body: `Saved:\n\n${message}`
  });

  console.log("handleSuccess : ", foo);
  return foo;
};

const handleFailure = async (transaction, error) => {
  console.log(transaction, error);
  const { phoneNumber, message } = transaction;

  // TODO: This action should create an outbound transaction
  // Inform User of error
  const foo = client.messages.create({
    from: process.env.PHONE_NUMBER, // From a valid Twilio number
    to: phoneNumber,
    body: `Yikes!\n\nWe couldn't save the following message:\n\n${message}\n\nError:\n\n${error}`
  });

  console.log("handleFailure : ", foo);
  // Inform Dev's of error
  console.error(`Transaction Save Error: ${error}`);

  return foo;
};

module.exports = {
  handleSuccess,
  handleFailure
};
