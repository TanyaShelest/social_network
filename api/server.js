const express = require("express");
const ConfigWrapper = require("./config-wrapper");
const app = express();

const config = new ConfigWrapper();

require("./routes/posts")(app);
require("./routes/user")(app);

app.use((err, req, res, next) => {
  console.error("Error:", err.stack);
  res.status(500);
  res.json({error: "Something went wrong"});
  });

app.get("/", (req, res) => {
  res.send("Hi there!");
});

app.listen(config.get("PORT"));
