const mongoose = require("mongoose");

const AppointmentSchema = new mongoose.Schema({
  name: String,
  email: String,
  date: Date,
  time: String,
});

module.exports = mongoose.model("Appointment", AppointmentSchema);
