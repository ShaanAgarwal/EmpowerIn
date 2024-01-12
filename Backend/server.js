const express = require("express");
const morgan = require('morgan');
const dotenv = require("dotenv");
const userRoutes = require('./Routes/userRoutes');
const { connectDatabase } = require("./Config/connectDatabase");

dotenv.config();

connectDatabase();

const app = express();

app.use(express.json());
app.use(morgan('dev'));
app.use('/api/user', userRoutes);

app.get("/", (req, res) => {
  try {
    res
      .status(200)
      .json({ message: "The API is running successfully.", success: true });
  } catch (error) {
    res.status(500).json({ message: "Internal Server error.", success: false });
  }
});

app.listen(8080, (req, res) => {
  console.log("Server is running on PORT 8080");
});
