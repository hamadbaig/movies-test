const dotenv = require("dotenv");

dotenv.config();
const express = require("express");
const connectDB = require("./config/db");
const cors = require("cors");
const authRoutes = require("./routes/authRoutes");
const movieRoutes = require("./routes/movieRoutes");
const favourites = require("./routes/favouriteRoutes");
const app = express();
connectDB();
app.use(cors({ origin: "https://movie-test-frontend.vercel.app/" }));
app.use(express.json());

app.use("/api/auth", authRoutes);
app.use("/api/movies", movieRoutes);
app.use("/api", movieRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
