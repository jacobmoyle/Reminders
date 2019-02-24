const { Transaction } = require("../../models");
const {
  handleSuccess,
  handleFailure
} = require("../../services/handleTransaction");

module.exports = {
  create: async (req, res) => {
    console.log("in create. Twilio body : ", req.body);

    const { From, Body } = req.body;

    // TODO: find user number and text body via request?
    const transaction = new Transaction({
      phoneNumber: From,
      message: Body,
      inbound: true
    });

    console.log("newTransaction: ", transaction);

    try {
      console.log("in try block ");

      let promise = await transaction.save();
      const success = await handleSuccess(transaction);
      console.log(success);
      console.log("resolved promise: ", promise);
    } catch (err) {
      const fail = await handleFailure(err, transaction);
      console.log(fail);
      console.log("ru-roh :", err);
    }

    console.log("after try/catch");

    return res.json(200);
  }
};

// newTransaction.save(async (err, transaction) => {
//   console.log("in db callback");

//   if (err) {
//     const failureRes = await handleFailure(transaction, err);
//     console.log("err failureRes :", failureRes);
//     return res.json(422);
//   }

//   const successRes = await handleSuccess(transaction);
//   console.log("err successRes :", successRes);
//   return res.json(200);
// });
