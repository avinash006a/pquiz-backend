const express = require("express");
const { getRandomQuestions } = require("../controllers/questionController");

const router = express.Router();

// Route to fetch random questions by set number
router.get("/:setNumber/random", getRandomQuestions);

module.exports = router;
