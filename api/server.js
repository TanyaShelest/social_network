const express = require("express");
const app = express();
const port = 3001;


app.use((err, req, res, next) => {
  console.error("Error:", err.stack);
  res.status(500);
  res.json({error: "Something went wrong"});
  });

app.get("/", (req, res) => {
  res.send("Hi there!");
});

app.listen(port);
