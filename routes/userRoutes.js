const express = require("express");
const User = require("../models/userModel"); // ✅ Import User model
const { signup, login,getUserById } = require("../controllers/userController");
const router = express.Router();

// Signup Route
router.post("/signup", signup);

// Login Route
router.post("/login", login);
router.get("/:id", getUserById); // Fetch user data by ID

// Get all users (for Dashboard)
router.get("/", async (req, res) => {
  try {
    const users = await User.find({}, "name username"); // Fetch only name & username
    res.status(200).json(users);
  } catch (error) {
    console.error("Error fetching users:", error);
    res.status(500).json({ message: "Server error fetching users" });
  }
});

// Delete User Route (For Dashboard)
router.delete("/:id", async (req, res) => {
  try {
    const userId = req.params.id;
    await User.findByIdAndDelete(userId);
    res.status(200).json({ message: "User deleted successfully!" });
  } catch (error) {
    console.error("Error deleting user:", error);
    res.status(500).json({ message: "Error deleting user" });
  }
});

module.exports = router;
