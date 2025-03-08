const User = require("../models/userModel");
const bcrypt = require("bcryptjs");

// Signup Controller
const signup = async (req, res) => {
    const { name, username, password } = req.body;
  
    try {
      // Validate input
      if (!name || !username || !password) {
        return res.status(400).json({ message: "All fields are required!" });
      }

      // Check if the user already exists
      const existingUser = await User.findOne({ username });
      
      if (existingUser) {
        return res.status(400).json({ message: "Username already exists!" });
      }
  
      // Hash the password before saving
      const hashedPassword = await bcrypt.hash(password, 10);
      const newUser = new User({ 
        name, 
        username, 
        password: hashedPassword, 
        score: 0 
      });
      
      await newUser.save();
      
      res.status(201).json({ 
        message: "Signup successful!", 
        userId: newUser._id 
      });
    } catch (error) {
      console.error("Signup error:", error);
      res.status(500).json({ message: "Server error during signup" });
    }
};

// Login Controller
const login = async (req, res) => {
    const { username, password } = req.body;

    try {
      // Validate input
      if (!username || !password) {
        return res.status(400).json({ message: "Username and password are required!" });
      }

      const user = await User.findOne({ username });
      if (!user) {
        return res.status(402).json({ message: "Invalid username or password!" });
      }

      
      res.status(200).json({ 
        message: "Login successful!", 
        userId: user._id 
      });
    } catch (error) {
      console.error("Login error:", error);
      res.status(500).json({ message: "Server error during login" });
    }
};

// Get User Data by ID
const getUserById = async (req, res) => {
    const { id } = req.params;

    try {
      // Validate ObjectId
      if (!id.match(/^[0-9a-fA-F]{24}$/)) {
        return res.status(400).json({ message: "Invalid user ID format" });
      }

      const user = await User.findById(id).select("name username score");
      if (!user) {
        return res.status(404).json({ message: "User not found!" });
      }

      res.status(200).json(user);
    } catch (error) {
      console.error("Error fetching user:", error);
      res.status(500).json({ message: "Server error while fetching user data" });
    }
};

module.exports = { signup, login, getUserById };
