const express = require("express");
const dotenv = require("dotenv");
const { chats } = require("./backend/data/data");
const connectDB = require("./backend/config/db");
const colors = require("colors");
const userRoutes = require("./backend/routes/userRoutes");
const chatRoutes = require("./backend/routes/chatRoutes")
const {
  notFound,
  errorHandler,
} = require("./backend/middleware/errorMiddleware");

dotenv.config();
connectDB();
const app = express();

app.use(express.json()); //to accept JSON Data

app.get("/", (req, res) => {
  res.send("Api is running");
});

app.use("/api/user", userRoutes);
app.use("/api/chat", chatRoutes);

app.use(notFound);
app.use(errorHandler);

const PORT = process.env.PORT || 5000;

app.listen(5000, console.log(`Server started on PORT ${PORT}`.yellow.bold));
