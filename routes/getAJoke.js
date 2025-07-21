const express = require("express");
const findARandomJoke = require("../services/selectAJoke");
const returnAJoke = require("../controllers/returnAJoke");

const router = express.Router();

// get route
router.get("/", returnAJoke);

module.exports = router;
