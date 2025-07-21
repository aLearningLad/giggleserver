const express = require("express");
const findARandomJoke = require("../services/selectAJoke");

const router = express.Router();

// get route
router.get("/", (req, res) => {
  const joke = findARandomJoke();

  if (joke) {
    res
      .status(200)
      .json({ message: "Here's your joke, maaaate: ", joke: joke });
  } else {
    res.status(404).json("Something's gone awfully wrong mate");
  }
});

module.exports = router;
