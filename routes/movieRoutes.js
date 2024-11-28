const express = require("express");
const { getMovies } = require("../controllers/movieController");
const router = express.Router();

router.get("/movies", getMovies);

module.exports = router;
