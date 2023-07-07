const express = require("express");
const app = express();

app.get("/v1/dogs", (req, res) => {
  res.send("My Dogs");
});

app.listen("8080", () => {
  console.log("server is running,..");
});
