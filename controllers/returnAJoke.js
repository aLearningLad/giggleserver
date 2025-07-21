const findARandomJoke = require("../services/selectAJoke");

function returnAJoke(req, res) {
  const joke = findARandomJoke();

  if (joke) {
    res
      .status(200)
      .json({ message: "Here's your joke, maaaate: ", joke: joke });
  } else {
    res.status(404).json("Something's gone awfully wrong mate");
  }
}

module.exports = returnAJoke;
