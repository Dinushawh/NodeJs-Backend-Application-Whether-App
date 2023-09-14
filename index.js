const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
const cors = require("cors");

const connect = require("./database/connection");

const app = express();
const PORT = process.env.PORT | 5001;

app.use(express.json());
app.use(cors());

connect(PORT);

const job = require("./utils/datasendsequntly");

/**
 * import all routes
 */
const userRouter = require("./routes/userRoutes");

/**
 * use all routes
 */
app.use("/api/", userRouter);

app.listen(PORT, function () {
  console.log("Server is running on port: " + PORT);
});
