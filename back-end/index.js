const express = require("express");
const app = express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const routes = require("./app/routes");
const dbConfig = require("./config/database");
const cors = require("cors");

mongoose.connect(
  dbConfig.url,
  {
    useNewUrlParser: true
  }
);

app.use(cors());
app.use(bodyParser.json());
app.use("/api", routes);

app.listen(3000);
