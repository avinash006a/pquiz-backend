const User = require("../models/userModel");
const bcrypt = require("bcryptjs");

// Signup Controller
const signup = async (req, res) => {
    const { name, username, password } = req.body;

    try {
        const existingUser = await User.findOne({ username });
        if (existingUser) {
            return res.status(400).json({ message: "User already exists!" });
        }

        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = new User({ name, username, password: hashedPassword, score: 0 });
        await newUser.save();

        res.status(201).json({ message: "Signup successful!", userId: newUser._id });
    } catch (error) {
        console.error("Signup error:", error);
        res.status(500).json({ message: "Server error" });
    }
};

// Login Controller
const login = async (req, res) => {
    const { username, password } = req.body;

    try {
        const user = await User.findOne({ username });
        if (!user) {
            return res.status(401).json({ message: "Invalid username or password!" });
        }

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(401).json({ message: "Invalid username or password!" });
        }

        res.status(200).json({ message: "Login successful!", userId: user._id });
    } catch (error) {
        console.error("Login error:", error);
        res.status(500).json({ message: "Server error" });
    }
};

// Get User Data by ID
const getUserById = async (req, res) => {
    const { id } = req.params;

    try {
        const user = await User.findById(id).select("name username score");
        if (!user) {
            return res.status(404).json({ message: "User not found!" });
        }

        res.status(200).json(user);
    } catch (error) {
        console.error("Error fetching user:", error);
        res.status(500).json({ message: "Server error" });
    }
};

module.exports = { signup, login, getUserById };
