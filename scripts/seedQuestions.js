const mongoose = require("mongoose");
const Question = require("../models/Question"); // Ensure the path is correct

mongoose
  .connect("mongodb+srv://bharth037:8220554280@cluster0.fxj1c.mongodb.net/QuestionBankUsers?retryWrites=true&w=majority&appName=Cluster0", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(async () => {
    console.log("Connected to MongoDB");

    const questions = [
      { setNumber: 1, topic: "Percentage", question: "s1 Percentage Oar is to rowboat as foot is to A.", options: ["A) 30", "B) 25", "C) 35", "D) 40"], answer: "A) 30" },
      { setNumber: 1, topic: "Percentage", question: "s1 Percentage Oar is to rowboat as foot is to A.", options: ["A) 30", "B) 25", "C) 35", "D) 40"], answer: "A) 30" },
      { setNumber: 1, topic: "Percentage", question: "s1 Percentage Oar is to rowboat as foot is to A.", options: ["A) 30", "B) 25", "C) 35", "D) 40"], answer: "A) 30" },
      { setNumber: 1, topic: "Percentage", question: "s1 Percentage Oar is to rowboat as foot is to A.", options: ["A) 30", "B) 25", "C) 35", "D) 40"], answer: "A) 30" },
      { setNumber: 1, topic: "Percentage", question: "s1 Percentage Oar is to rowboat as foot is to A.", options: ["A) 30", "B) 25", "C) 35", "D) 40"], answer: "A) 30" },
      { setNumber: 1, topic: "Percentage", question: "s1 Percentage Oar is to rowboat as foot is to A.", options: ["A) 30", "B) 25", "C) 35", "D) 40"], answer: "A) 30" },
      { setNumber: 1, topic: "Percentage", question: "s1 Percentage Oar is to rowboat as foot is to A.", options: ["A) 30", "B) 25", "C) 35", "D) 40"], answer: "A) 30" },
      { setNumber: 1, topic: "Percentage", question: "s1 Percentage Oar is to rowboat as foot is to A.", options: ["A) 30", "B) 25", "C) 35", "D) 40"], answer: "A) 30" },
      { setNumber: 1, topic: "Percentage", question: "s1 Percentage Oar is to rowboat as foot is to A.", options: ["A) 30", "B) 25", "C) 35", "D) 40"], answer: "A) 30" },
      { setNumber: 1, topic: "Percentage", question: "s1 Percentage Which word does NOT belong with the others B.", options: ["A) 30", "B) 25", "C) 35", "D) 40"], answer: "B) 25" },
      { setNumber: 1, topic: "Algebra", question: "s1 Algebra What is the average of first five multiples of 12? D.", options: ["A) 2200", "B) 2100", "C) 2300", "D) 2400"], answer: "D) 2400" },
      { setNumber: 1, topic: "Algebra", question: "s1 Algebra What is the average of first five natural numbers B.", options: ["A) 2200", "B) 2100", "C) 2300", "D) 2400"], answer: "B) 2100" },
      { setNumber: 1, topic: "Algebra", question: "s1 Algebra A boy was asked to multiply a number by 25 but by mistake he multiplied by 45 and the answer was 200 more than the correct answer. What was the number? A.", options: ["A) 2200", "B) 2100", "C) 2300", "D) 2400"], answer: "A) 2200" },
      { setNumber: 1, topic: "Algebra", question: "s1 Algebra What is the average of first five multiples of 12? D.", options: ["A) 2200", "B) 2100", "C) 2300", "D) 2400"], answer: "D) 2400" },
      { setNumber: 1, topic: "Algebra", question: "s1 Algebra What is the average of first five natural numbers B.", options: ["A) 2200", "B) 2100", "C) 2300", "D) 2400"], answer: "B) 2100" },
      { setNumber: 1, topic: "Algebra", question: "s1 Algebra A boy was asked to multiply a number by 25 but by mistake he multiplied by 45 and the answer was 200 more than the correct answer. What was the number? A.", options: ["A) 2200", "B) 2100", "C) 2300", "D) 2400"], answer: "A) 2200" },
      { setNumber: 1, topic: "Algebra", question: "s1 Algebra What is the average of first five multiples of 12? D.", options: ["A) 2200", "B) 2100", "C) 2300", "D) 2400"], answer: "D) 2400" },
      { setNumber: 1, topic: "Algebra", question: "s1 Algebra What is the average of first five natural numbers B.", options: ["A) 2200", "B) 2100", "C) 2300", "D) 2400"], answer: "B) 2100" },
      { setNumber: 1, topic: "Algebra", question: "s1 Algebra A boy was asked to multiply a number by 25 but by mistake he multiplied by 45 and the answer was 200 more than the correct answer. What was the number? A.", options: ["A) 2200", "B) 2100", "C) 2300", "D) 2400"], answer: "A) 2200" },
      { setNumber: 1, topic: "Algebra", question: "s1 Algebra A boy was asked to multiply a number by 25 but by mistake he multiplied by 45 and the answer was 200 more than the correct answer. What was the number? A.", options: ["A) 2200", "B) 2100", "C) 2300", "D) 2400"], answer: "A) 2200" },
      { setNumber: 1, topic: "Geometry", question: " s1 Geometry Find the product of face value and place value of 4 in 234567. B", options: ["A) 60", "B) 70", "C) 75", "D) 68"], answer: "B) 70" },
      { setNumber: 1, topic: "Geometry", question: "s1 Geometry Given that 1+2+3+.. +9 = 45, find the value of (11+12+13+..+19). C", options: ["A) 60", "B) 70", "C) 75", "D) 68"], answer: "C) 75" },
      { setNumber: 1, topic: "Geometry", question: "s1 Geometry Which of the following years is not a leap year? D", options: ["A) 60", "B) 70", "C) 75", "D) 68"], answer: "D) 68" },
      { setNumber: 1, topic: "Geometry", question: " s1 Geometry Find the product of face value and place value of 4 in 234567. B", options: ["A) 60", "B) 70", "C) 75", "D) 68"], answer: "B) 70" },
      { setNumber: 1, topic: "Geometry", question: "s1 Geometry Given that 1+2+3+.. +9 = 45, find the value of (11+12+13+..+19). C", options: ["A) 60", "B) 70", "C) 75", "D) 68"], answer: "C) 75" },
      { setNumber: 1, topic: "Geometry", question: "s1 Geometry Which of the following years is not a leap year? D", options: ["A) 60", "B) 70", "C) 75", "D) 68"], answer: "D) 68" },
      { setNumber: 1, topic: "Geometry", question: " s1 Geometry Find the product of face value and place value of 4 in 234567. B", options: ["A) 60", "B) 70", "C) 75", "D) 68"], answer: "B) 70" },
      { setNumber: 1, topic: "Geometry", question: " s1 Geometry Find the product of face value and place value of 4 in 234567. B", options: ["A) 60", "B) 70", "C) 75", "D) 68"], answer: "B) 70" },
      { setNumber: 1, topic: "Geometry", question: "s1 Geometry Given that 1+2+3+.. +9 = 45, find the value of (11+12+13+..+19). C", options: ["A) 60", "B) 70", "C) 75", "D) 68"], answer: "C) 75" },
      { setNumber: 1, topic: "Geometry", question: "s1 Geometry Which of the following years is not a leap year? D", options: ["A) 60", "B) 70", "C) 75", "D) 68"], answer: "D) 68" },



      { setNumber: 2, topic: "Percentage", question: "S2 Percentage Yard is to inch as quart is to C", options: ["A) 30", "B) 25", "C) 35", "D) 40"], answer: "C) 35" },
      { setNumber: 2, topic: "Percentage", question: "S2 Percentage What is the angle between hour hand and minute hand of a clock at 3.30? B", options: ["A) 30", "B) 25", "C) 35", "D) 40"], answer: "B) 25" },
      { setNumber: 2, topic: "Percentage", question: "S2 Percentage A 60 liter mixture of milk and water contains 10% water. How much water must be added to make water 20% in the mixture? D", options: ["A) 30", "B) 25", "C) 35", "D) 40"], answer: "D) 40" },
      { setNumber: 2, topic: "Percentage", question: "S2 Percentage Yard is to inch as quart is to C", options: ["A) 30", "B) 25", "C) 35", "D) 40"], answer: "C) 35" },
      { setNumber: 2, topic: "Percentage", question: "S2 Percentage What is the angle between hour hand and minute hand of a clock at 3.30? B", options: ["A) 30", "B) 25", "C) 35", "D) 40"], answer: "B) 25" },
      { setNumber: 2, topic: "Percentage", question: "S2 Percentage A 60 liter mixture of milk and water contains 10% water. How much water must be added to make water 20% in the mixture? D", options: ["A) 30", "B) 25", "C) 35", "D) 40"], answer: "D) 40" },
      { setNumber: 2, topic: "Percentage", question: "S2 Percentage Yard is to inch as quart is to C", options: ["A) 30", "B) 25", "C) 35", "D) 40"], answer: "C) 35" },
      { setNumber: 2, topic: "Percentage", question: "S2 Percentage What is the angle between hour hand and minute hand of a clock at 3.30? B", options: ["A) 30", "B) 25", "C) 35", "D) 40"], answer: "B) 25" },
      { setNumber: 2, topic: "Percentage", question: "S2 Percentage A 60 liter mixture of milk and water contains 10% water. How much water must be added to make water 20% in the mixture? D", options: ["A) 30", "B) 25", "C) 35", "D) 40"], answer: "D) 40" },
      { setNumber: 2, topic: "Percentage", question: "S2 Percentage A 60 liter mixture of milk and water contains 10% water. How much water must be added to make water 20% in the mixture? D", options: ["A) 30", "B) 25", "C) 35", "D) 40"], answer: "D) 40" },

      { setNumber: 2, topic: "Algebra", question: "S2   Algebra Average of five numbers is 20. If each number is multiplied by 2, what will be the new average? D", options: ["A) 2200", "B) 2100", "C) 2300", "D) 2400"], answer: "D) 2400" },
      { setNumber: 2, topic: "Algebra", question: "S2 Algebra If the sum is 240 and average is 40, find the number of quantities. B", options: ["A) 2200", "B) 2100", "C) 2300", "D) 2400"], answer: "B) 2100" },
      { setNumber: 2, topic: "Algebra", question: "S2 Algebra Which of the following numbers is divisible by 9? B", options: ["A) 2200", "B) 2100", "C) 2300", "D) 2400"], answer: "B) 2100" },
      { setNumber: 2, topic: "Algebra", question: "S2   Algebra Average of five numbers is 20. If each number is multiplied by 2, what will be the new average? D", options: ["A) 2200", "B) 2100", "C) 2300", "D) 2400"], answer: "D) 2400" },
      { setNumber: 2, topic: "Algebra", question: "S2 Algebra If the sum is 240 and average is 40, find the number of quantities. B", options: ["A) 2200", "B) 2100", "C) 2300", "D) 2400"], answer: "B) 2100" },
      { setNumber: 2, topic: "Algebra", question: "S2 Algebra Which of the following numbers is divisible by 9? B", options: ["A) 2200", "B) 2100", "C) 2300", "D) 2400"], answer: "B) 2100" },
      { setNumber: 2, topic: "Algebra", question: "S2   Algebra Average of five numbers is 20. If each number is multiplied by 2, what will be the new average? D", options: ["A) 2200", "B) 2100", "C) 2300", "D) 2400"], answer: "D) 2400" },
      { setNumber: 2, topic: "Algebra", question: "S2 Algebra If the sum is 240 and average is 40, find the number of quantities. B", options: ["A) 2200", "B) 2100", "C) 2300", "D) 2400"], answer: "B) 2100" },
      { setNumber: 2, topic: "Algebra", question: "S2 Algebra Which of the following numbers is divisible by 9? B", options: ["A) 2200", "B) 2100", "C) 2300", "D) 2400"], answer: "B) 2100" },
      { setNumber: 2, topic: "Algebra", question: "S2 Algebra Which of the following numbers is divisible by 9? B", options: ["A) 2200", "B) 2100", "C) 2300", "D) 2400"], answer: "B) 2100" },

      { setNumber: 2, topic: "Geometry", question: "S2 Geometry What will be the HCF of 608, 544; 638, 783; and 425, 476 respectively? C", options: ["A) 60", "B) 70", "C) 75", "D) 68"], answer: "C) 75" },
      { setNumber: 2, topic: "Geometry", question: "S2 Geometry In a bag, there are 8 red, 7 yellow and 6 green balls. If one ball is picked up at random, what is the probability that it is neither red nor green? B", options: ["A) 60", "B) 70", "C) 75", "D) 68"], answer: "B) 70" },
      { setNumber: 2, topic: "Geometry", question: "S2 Geometry If (2p + 1) is a prime number, which one of the following digits could be the value of p? C", options: ["A) 60", "B) 70", "C) 75", "D) 68"], answer: "C) 75" },
      { setNumber: 2, topic: "Geometry", question: "S2 Geometry What will be the HCF of 608, 544; 638, 783; and 425, 476 respectively? C", options: ["A) 60", "B) 70", "C) 75", "D) 68"], answer: "C) 75" },
      { setNumber: 2, topic: "Geometry", question: "S2 Geometry In a bag, there are 8 red, 7 yellow and 6 green balls. If one ball is picked up at random, what is the probability that it is neither red nor green? B", options: ["A) 60", "B) 70", "C) 75", "D) 68"], answer: "B) 70" },
      { setNumber: 2, topic: "Geometry", question: "S2 Geometry If (2p + 1) is a prime number, which one of the following digits could be the value of p? C", options: ["A) 60", "B) 70", "C) 75", "D) 68"], answer: "C) 75" },
      { setNumber: 2, topic: "Geometry", question: "S2 Geometry What will be the HCF of 608, 544; 638, 783; and 425, 476 respectively? C", options: ["A) 60", "B) 70", "C) 75", "D) 68"], answer: "C) 75" },
      { setNumber: 2, topic: "Geometry", question: "S2 Geometry In a bag, there are 8 red, 7 yellow and 6 green balls. If one ball is picked up at random, what is the probability that it is neither red nor green? B", options: ["A) 60", "B) 70", "C) 75", "D) 68"], answer: "B) 70" },
      { setNumber: 2, topic: "Geometry", question: "S2 Geometry If (2p + 1) is a prime number, which one of the following digits could be the value of p? C", options: ["A) 60", "B) 70", "C) 75", "D) 68"], answer: "C) 75" },
      { setNumber: 2, topic: "Geometry", question: "S2 Geometry If (2p + 1) is a prime number, which one of the following digits could be the value of p? C", options: ["A) 60", "B) 70", "C) 75", "D) 68"], answer: "C) 75" },


      { setNumber: 3, topic: "Percentage", question: "S3 Percentage The day on 5th April of a year will be the same day on 5th of which month of the same year? C", options: ["A) 30", "B) 25", "C) 35", "D) 40"], answer: "C) 35" },
      { setNumber: 3, topic: "Percentage", question: "S3 Percentage Catching the earlier train will give us the ...... to do some shopping. C", options: ["A) 30", "B) 25", "C) 35", "D) 40"], answer: "C) 35" },
      { setNumber: 3, topic: "Percentage", question: "S3 Percentage Antonyms for EXODUS B", options: ["A) 30", "B) 25", "C) 35", "D) 40"], answer: "B) 25" },
      { setNumber: 3, topic: "Percentage", question: "S3 Percentage The day on 5th April of a year will be the same day on 5th of which month of the same year? C", options: ["A) 30", "B) 25", "C) 35", "D) 40"], answer: "C) 35" },
      { setNumber: 3, topic: "Percentage", question: "S3 Percentage Catching the earlier train will give us the ...... to do some shopping. C", options: ["A) 30", "B) 25", "C) 35", "D) 40"], answer: "C) 35" },
      { setNumber: 3, topic: "Percentage", question: "S3 Percentage Antonyms for EXODUS B", options: ["A) 30", "B) 25", "C) 35", "D) 40"], answer: "B) 25" },
     { setNumber: 3, topic: "Percentage", question: "S3 Percentage The day on 5th April of a year will be the same day on 5th of which month of the same year? C", options: ["A) 30", "B) 25", "C) 35", "D) 40"], answer: "C) 35" },
      { setNumber: 3, topic: "Percentage", question: "S3 Percentage Catching the earlier train will give us the ...... to do some shopping. C", options: ["A) 30", "B) 25", "C) 35", "D) 40"], answer: "C) 35" },
      { setNumber: 3, topic: "Percentage", question: "S3 Percentage Antonyms for EXODUS B", options: ["A) 30", "B) 25", "C) 35", "D) 40"], answer: "B) 25" },
      { setNumber: 3, topic: "Percentage", question: "S3 Percentage Antonyms for EXODUS B", options: ["A) 30", "B) 25", "C) 35", "D) 40"], answer: "B) 25" },

      { setNumber: 3, topic: "Algebra", question: "S3 Algebra correct spelling of the given word B.", options: ["A) 2200", "B) 2100", "C) 2300", "D) 2400"], answer: "B) 2100" },
      { setNumber: 3, topic: "Algebra", question: "S3 Algebra If the average of three consecutive even numbers is 34, find the largest of these numbers. C", options: ["A) 2200", "B) 2100", "C) 2300", "D) 2400"], answer: "C) 2300" },
      { setNumber: 3, topic: "Algebra", question: "S3  Algebra Find the largest 4 digit number that is exactly divisible by 66.D", options: ["A) 2200", "B) 2100", "C) 2300", "D) 2400"], answer: "D) 2400" },
      { setNumber: 3, topic: "Algebra", question: "S3 Algebra correct spelling of the given word B.", options: ["A) 2200", "B) 2100", "C) 2300", "D) 2400"], answer: "B) 2100" },
      { setNumber: 3, topic: "Algebra", question: "S3 Algebra If the average of three consecutive even numbers is 34, find the largest of these numbers. C", options: ["A) 2200", "B) 2100", "C) 2300", "D) 2400"], answer: "C) 2300" },
      { setNumber: 3, topic: "Algebra", question: "S3  Algebra Find the largest 4 digit number that is exactly divisible by 66.D", options: ["A) 2200", "B) 2100", "C) 2300", "D) 2400"], answer: "D) 2400" },
      { setNumber: 3, topic: "Algebra", question: "S3 Algebra correct spelling of the given word B.", options: ["A) 2200", "B) 2100", "C) 2300", "D) 2400"], answer: "B) 2100" },
      { setNumber: 3, topic: "Algebra", question: "S3 Algebra If the average of three consecutive even numbers is 34, find the largest of these numbers. C", options: ["A) 2200", "B) 2100", "C) 2300", "D) 2400"], answer: "C) 2300" },
      { setNumber: 3, topic: "Algebra", question: "S3  Algebra Find the largest 4 digit number that is exactly divisible by 66.D", options: ["A) 2200", "B) 2100", "C) 2300", "D) 2400"], answer: "D) 2400" },
      { setNumber: 3, topic: "Algebra", question: "S3  Algebra Find the largest 4 digit number that is exactly divisible by 66.D", options: ["A) 2200", "B) 2100", "C) 2300", "D) 2400"], answer: "D) 2400" },

      { setNumber: 3, topic: "Geometry", question: "S3 Geometry They walked ……. The edge of the land. C", options: ["A) 60", "B) 70", "C) 75", "D) 68"], answer: "C) 75" },
      { setNumber: 3, topic: "Geometry", question: "S3 Geometry On looking at the cloudless sky, Peter said, “It won’t rain today.” B", options: ["A) 60", "B) 70", "C) 75", "D) 68"], answer: "B) 70" },
      { setNumber: 3, topic: "Geometry", question: "S3 Geometry A person who travels on foot. B", options: ["A) 60", "B) 70", "C) 75", "D) 68"], answer: "B) 70" },
      { setNumber: 3, topic: "Geometry", question: "S3 Geometry They walked ……. The edge of the land. C", options: ["A) 60", "B) 70", "C) 75", "D) 68"], answer: "C) 75" },
      { setNumber: 3, topic: "Geometry", question: "S3 Geometry On looking at the cloudless sky, Peter said, “It won’t rain today.” B", options: ["A) 60", "B) 70", "C) 75", "D) 68"], answer: "B) 70" },
      { setNumber: 3, topic: "Geometry", question: "S3 Geometry A person who travels on foot. B", options: ["A) 60", "B) 70", "C) 75", "D) 68"], answer: "B) 70" },
      { setNumber: 3, topic: "Geometry", question: "S3 Geometry They walked ……. The edge of the land. C", options: ["A) 60", "B) 70", "C) 75", "D) 68"], answer: "C) 75" },
      { setNumber: 3, topic: "Geometry", question: "S3 Geometry On looking at the cloudless sky, Peter said, “It won’t rain today.” B", options: ["A) 60", "B) 70", "C) 75", "D) 68"], answer: "B) 70" },
      { setNumber: 3, topic: "Geometry", question: "S3 Geometry A person who travels on foot. B", options: ["A) 60", "B) 70", "C) 75", "D) 68"], answer: "B) 70" },
      { setNumber: 3, topic: "Geometry", question: "S3 Geometry A person who travels on foot. B", options: ["A) 60", "B) 70", "C) 75", "D) 68"], answer: "B) 70" },

    ];


    // Clear the collection before inserting new questions
    await Question.deleteMany();
    console.log("Old questions cleared from the database.");

    // Insert the new set of questions
    await Question.insertMany(questions);
    console.log("New questions inserted successfully!");

    mongoose.connection.close();
    console.log("Database connection closed.");
  })
  .catch((err) => {
    console.error("Error connecting to MongoDB:", err);
  });