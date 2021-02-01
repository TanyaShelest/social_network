const router = require("express").Router();
const User = require("../models/user");
const authController = require("../controllers/auth.controller");

router.post("/login", authController.login);

router.post("/register", authController.register);

router.get("/verify/:token", authController.verifyEmail);

router.get("/logout", authController.logout);

module.exports = router;
