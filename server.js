require("dotenv").config();
const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");
const recipeRoutes = require("./routes/recipeRoutes");

const app = express();
const PORT = process.env.PORT || 3080;

app.use(cors());
app.use(express.json());

connectDB();
app.use("/api", recipeRoutes);

app.listen(PORT, () =>
  console.log(`Server is running on http://localhost:${PORT}`)
);