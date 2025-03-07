const mongoose = require("mongoose");

const questionSchema = new mongoose.Schema({
  setNumber: { type: Number, required: true },
  question: { type: String, required: true },
  options: { type: [String], required: true },
  answer: { type: String, required: true },
  topic: { type: String, required: true },
});

module.exports = mongoose.model("Question", questionSchema);
