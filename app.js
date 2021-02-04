const express = require("express");

const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: false }));

const v1router = require("./server/routers/api/index.js");

app.use("/api", v1router);

app.listen(8000, () => {
  console.log(`Server is running on port 8000`);
});
