const mongoose = require("mongoose");

const scoreSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    setNumber: { type: Number, required: true },
    scoreByTopic: { type: Object, required: true },
    totalScore: { type: Number, required: true },
    lowestTopic: { type: String, required: true },
    attemptNumber: { type: Number, default: 1 }, // Default to 1 on first attempt
  date: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Score", scoreSchema);
