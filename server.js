const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const userRoutes = require("./routes/userRoutes");
const questionRoutes = require("./routes/questionRoutes");
const scoreRoutes = require("./routes/scoreRoutes");

const app = express();
app.use(express.json());
app.use(cors());

// Routes
app.use("/api/users", userRoutes);
app.use("/api/questions", questionRoutes);
app.use("/api/scores", scoreRoutes);

// MongoDB Connection with Retry
const connectWithRetry = (retries = 5) => {
  mongoose
    .connect("mongodb+srv://bharth037:8220554280@cluster0.fxj1c.mongodb.net/QuestionBankUsers?retryWrites=true&w=majority&appName=Cluster0", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log("Mongoose Connected...");
      app.listen(3002, () => console.log("Backend Started at 3002"));
    })
    .catch((err) => {
      console.error("Mongoose connection error:", err);
      if (retries > 0) {
        console.log(`Retrying connection... (${5 - retries + 1})`);
        setTimeout(() => connectWithRetry(retries - 1), 5000); // Retry after 5 seconds
      }
    });
};

connectWithRetry(); // Initial call to connect
