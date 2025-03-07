const Question = require("../models/Question");

const getRandomQuestions = async (req, res) => {
  try {
    const { setNumber } = req.params;

    if (!setNumber || isNaN(setNumber)) {
      return res.status(400).json({ message: "Invalid or missing setNumber." });
    }

    // Fetch random 30 questions for the given setNumber
    const questions = await Question.aggregate([
      { $match: { setNumber: parseInt(setNumber, 10) } },
      { $sample: { size: 30 } },
    ]);

    if (!questions.length) {
      return res.status(404).json({ message: "No questions found for this set." });
    }

    res.json(questions);
  } catch (error) {
    console.error("Error fetching random questions:", error);
    res.status(500).json({ message: "Error fetching random questions.", error });
  }
};

module.exports = { getRandomQuestions };
