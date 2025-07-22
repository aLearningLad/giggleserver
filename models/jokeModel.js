const mongoose = require("mongoose");
const { Schema } = mongoose;

const jokeSchema = new Schema({
  title: String,
  joke_body: String,
  added_at: {
    type: Date,
    default: Date.now(),
  },
  meta: {
    upvotes: Number,
    downvotes: Number,
  },
});

const Joke = mongoose.model("Joke", jokeSchema);
