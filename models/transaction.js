const mongoose = require("mongoose");
/**
 * A Transaction is a side effect of any User interaction
 */

const transactionSchema = mongoose.Schema({
  phoneNumber: String,

  /**
   * @message contains the transaction text
   */
  message: String,

  /**
   * if @inbound = true
   *  -> recieved from User
   * if @inbound = false
   *  -> sent to User
   *
   * @inbound should never be null
   * TODOs:
   * validate true or false
   */
  inbound: Boolean
});

const Transaction = mongoose.model("Transaction", transactionSchema);

module.exports = Transaction;
