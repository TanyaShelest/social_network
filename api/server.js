const express = require("express");
const app = express();
const ConfigWrapper = require("./config-wrapper");
const passport = require("passport");
const config = new ConfigWrapper();
const authRequest = require("./middleware/auth-request")(passport);
const diContainer = require("./services/diContainer");

diContainer.register("db", require("./services/db-connection"));
app.db = diContainer.get("db");

app.use(passport.initialize());
app.use(authRequest);
const authRoutes = require("./routes/auth");
const postRoutes = require("./routes/posts");
const userRoutes = require("./routes/user");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/auth", authRoutes);
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
