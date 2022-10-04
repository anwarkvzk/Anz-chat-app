const express = require("express");
const dotenv = require("dotenv");
const { chats } = require("./backend/data/data");
const connectDB = require("./backend/config/db");
const colors = require('colors')
const userRoutes = require('./backend/routes/userRoutes')

const app = express();
dotenv.config();
connectDB()

app.get("/", (req, res) => {
  res.send("Api is running");
});

app.use('/api/user', userRoutes)

const PORT = process.env.PORT || 5000;

app.listen(5000, console.log(`Server started on PORT ${PORT}`.yellow.bold));
