const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const colorizerRouter = require("./routes/colorizer");

const App = express();
App.use(bodyParser.json());
App.use(cors());

App.use("/colorizer", colorizerRouter);

App.listen(3000);
