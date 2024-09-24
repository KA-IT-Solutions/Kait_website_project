const mongoose = require('mongoose');

const FormDataSchema = new mongoose.Schema({
  name: String,
  contact: String,
  email: String,
  dob: String,
  education: String,
  address: String,
  permanentAddress: String,
  resume: String,  // Path to the uploaded resume file
});

module.exports = mongoose.model('FormData', FormDataSchema);
