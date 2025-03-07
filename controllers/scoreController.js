const Score = require("../models/Score");
const User = require("../models/userModel");
const Question = require("../models/Question");

const saveScore = async (req, res) => {
  try {
    const { userId, setNumber, answers } = req.body;

    if (!userId || !setNumber || !answers) {
      return res.status(400).json({ message: "Missing required fields." });
    }

    const questions = await Question.find({ setNumber });

    if (!questions || questions.length === 0) {
      return res.status(404).json({ message: "No questions found for the set." });
    }

    let scoreByTopic = {};
    let totalScore = 0;

    questions.forEach((question) => {
      const questionId = question._id.toString();
      const userAnswer = answers[questionId];
      const isCorrect = userAnswer === question.answer;

      if (!scoreByTopic[question.topic]) {
        scoreByTopic[question.topic] = 0;
      }

      if (isCorrect) {
        scoreByTopic[question.topic] += 1;
        totalScore += 1;
      }
    });

    let lowestTopic = Object.keys(scoreByTopic).reduce((lowest, topic) => {
      return scoreByTopic[topic] < scoreByTopic[lowest] ? topic : lowest;
    }, Object.keys(scoreByTopic)[0]);

    let existingScore = await Score.findOne({ userId, setNumber });

    if (existingScore) {
      existingScore.scoreByTopic = scoreByTopic;
      existingScore.totalScore = totalScore;
      existingScore.lowestTopic = lowestTopic;
      existingScore.attemptNumber += 1; // Increment attempt number
      await existingScore.save();
    } else {
      const newScore = new Score({ 
        userId, 
        setNumber, 
        scoreByTopic, 
        totalScore, 
        lowestTopic, 
        attemptNumber: 1 
      });
      await newScore.save();
    }

    res.status(200).json({ 
      totalScore, 
      scoreByTopic, 
      lowestTopic, 
      attemptNumber: existingScore ? existingScore.attemptNumber : 1 
    });
  } catch (error) {
    console.error("Error saving score:", error);
    res.status(500).json({ message: "Error saving score.", error });
  }
};

const getScores = async (req, res) => {
  try {
    const scores = await Score.find().populate("userId", "name username");
    res.status(200).json(scores);
  } catch (error) {
    console.error("Error fetching scores:", error);
    res.status(500).json({ message: "Server error fetching scores" });
  }
};

const getScoreById = async (req, res) => {
  try {
    const { id } = req.params;
    const score = await Score.findOne({ userId: id }).populate("userId", "name username");

    if (!score) {
      return res.status(404).json({ message: "Score not found" });
    }

    res.status(200).json(score);
  } catch (error) {
    console.error("Error fetching score by user ID:", error);
    res.status(500).json({ message: "Server error fetching score" });
  }
};

module.exports = { saveScore, getScores, getScoreById };
