const mongoose = require('mongoose');

const reminderSchema = mongoose.Schema({
  text: String,
  uuid: String,
  userId: String, // not sure we need this
  updates: Array,
});

const Reminder = mongoose.model('Reminder', reminderSchema);

export default Reminder;
