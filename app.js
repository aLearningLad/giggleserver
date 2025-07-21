const express = require("express");
const getAJoke = require("./routes/getAJoke");

// my app instance
const app = express();

app.use("/", getAJoke);

// fire up
app.listen(3000, () => {
  console.log("Server listening on http://localhost:3000");
});
