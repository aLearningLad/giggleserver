require("dotenv").config();
const mongoose = require("mongoose");

const connectToDb = async () => {
  try {
    const connection = await mongoose.connect("");
  } catch (error) {
    console.log("Yoh, unable to connect to database: ", error);
  }
};
