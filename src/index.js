const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");
require("dotenv").config();

connectDB();

const app = express();

app.use(cors());
app.use(express.json());
// app.use(express.json({ extended: false }));

app.use("/api/users", require("./routes/api/users"));

app.get("/", (req, res) => {
  res.send("PETVET Server is running properly");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server Started on port ${PORT}`));
