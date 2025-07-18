const express = require("express");

// my app instance
const app = express();

// fire up
app.listen(3000, () => {
  console.log("Server listening on http://localhost:3000");
});

// jokes array
const all_jokes = [
  {
    1: "Yo' mama's so ugly she made an onion cry!",
  },
  {
    2: "You're so stupid, you believe Scuderia Ferrari will win a Constructor's Title during your lifetime!",
  },
  {
    3: "You're so poor, you lick the seasoning off of people's fingers!",
  },
  { 4: "Your forehead is so big, you remember tomorrow's events!" },
];

// random joke selector
function findARandomJoke() {
  const index = Math.floor((Math.random * 4 + Math.random * 2) / 4);
  return all_jokes[index];
}

app.get("/", (req, res) => {
  const joke = findARandomJoke();
  res.status(200).json("Here's your joke, maaaate: ", joke);
});
