const express = require("express");
const { saveScore, getScores, getScoreById } = require("../controllers/scoreController");
const Score = require("../models/Score"); // Import Score Model
const router = express.Router();

// Save Score
router.post("/sc", saveScore);

// Get all Scores (Dashboard)
router.get("/", getScores);

// Get Score by ID
router.get("/:id", getScoreById);

// Delete Score Route (Fixing this!)
router.delete("/:id", async (req, res) => {  // Make sure route is correctly defined
    try {
      const scoreId = req.params.id;
      const deletedScore = await Score.findByIdAndDelete(scoreId);

      if (!deletedScore) {
        return res.status(404).json({ message: "Score not found" });
      }

      res.status(200).json({ message: "Score deleted successfully!" });
    } catch (error) {
      console.error("Error deleting score:", error);
      res.status(500).json({ message: "Error deleting score" });
    }
});

module.exports = router;
