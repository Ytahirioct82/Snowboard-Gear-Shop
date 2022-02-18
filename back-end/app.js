// DEPENDENCIES
const cors = require("cors");
const express = require("express");

const shopController = require("./controllers/shopController.js");

// CONFIGURATION
const app = express();

// MIDDLEWARE
app.use(cors());
app.use(express.json()); // Parse incoming JSON
app.use("/store", shopController);

// ROUTES
app.get("/", (req, res) => {
  res.send("Hello, world!");
});

// EXPORT
module.exports = app;
