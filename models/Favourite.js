const mongoose = require("mongoose");

const favouriteSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  movieId: { type: String, required: true },
  movieData: { type: String, required: true }, // Store the movie's artwork URL
  name: { type: String, required: true },
  price: { type: Number, required: true },
  priname: { type: String, required: true }, // Genre name
});

module.exports = mongoose.model("Favourite", favouriteSchema);
