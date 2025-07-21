const all_jokes = require("../dev_data/localJokes");

// random joke selector
function findARandomJoke() {
  const index = Math.floor(Math.random() * all_jokes.length);
  console.log(`The chosen joke is ${all_jokes[index]}`);
  return all_jokes[index];
}

module.exports = findARandomJoke;
