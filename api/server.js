const express = require("express");
const app = express();
const ConfigWrapper = require("./config-wrapper");
const config = new ConfigWrapper();
const diContainer = require("./services/diContainer");

diContainer.register("db", require("./services/db-connection"));
app.db = diContainer.get("db");

const postRoutes = require("./routes/posts");
const userRoutes = require("./routes/user");

app.use("/api", postRoutes);
app.use("/api", userRoutes);

app.use((err, req, res, next) => {
  console.error("Error:", err.stack);
  res.status(500);
  res.json({ error: "Something went wrong" });
});

app.get("/", (req, res) => {
  res.send("Hi there!");
});

app.listen(config.get("PORT"));
