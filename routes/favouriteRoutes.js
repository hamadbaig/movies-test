const express = require("express");
const router = express.Router();
const { addToFavourites } = require("../controllers/favouriteController");

router.post("/addfav", addToFavourites); // Endpoint to add movie to favourites

module.exports = router;
