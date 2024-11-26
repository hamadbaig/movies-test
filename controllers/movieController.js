
const axios = require("axios");

exports.getMovies = async (req, res) => {
  const { page = 1, limit = 10, search = "" } = req.query;
  try {
    const offset = (page - 1) * limit;
    const response = await axios.get("https://itunes.apple.com/search", {
      params: { term: search, country: "au", media: "movie", limit, offset },
    });
    res.json(response.data.results);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch movies", error });
  }
};
