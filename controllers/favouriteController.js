const Favourite = require("../models/Favourite");
const jwt = require("jsonwebtoken");

exports.addToFavourites = async (req, res) => {
  try {
    const { movieId, user, movieData, name, price, priname } = req.body;

    // Verify the token from the request header
    const token = req.headers.authorization.split(" ")[1]; // Bearer <token>
    if (!token) {
      return res
        .status(401)
        .json({ message: "Authorization token is missing" });
    }

    // Decode the token to get user ID
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const userIdFromToken = decoded.userId; // Assuming the userId is stored in the token

    // Ensure that the user in the request body matches the user in the token
    if (userIdFromToken !== user) {
      return res
        .status(403)
        .json({
          message:
            "User mismatch. You cannot add this movie to another user's favourites.",
        });
    }

    // Create a new Favourite entry
    const favourite = new Favourite({
      user: user,
      movieId: movieId,
      movieData: movieData,
      name: name,
      price: price,
      priname: priname,
    });

    await favourite.save();
    res.status(201).json({ message: "Movie added to favourites" });
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ message: "Server error. Failed to add movie to favourites." });
  }
};
