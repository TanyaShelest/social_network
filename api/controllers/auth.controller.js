const passport = require("../services/auth/passport");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("../models/user");

class AuthController {
  async login(req, res) {
    passport.authenticate("login", async (error, user, trace) => {
      try {
        if (error || !user) {
          res.status(400).json({ message: trace.message });
        }
        req.login(user, { session: false }, async (error) => {
          if (error) {
            res.status(400).json({ message: error.message });
          }
          const token = jwt.sign(
            { id: user.id, email: user.email },
            process.env.JWT,
            {
              expiresIn: 60 * 60,
            }
          );
          res.status(200).json({ user: req.user, token: `Bearer ${token}` });
        });
      } catch (error) {
        console.log(error.stack);
      }
    })(req, res);
  }

  async register(req, res) {
    const candidate = await User.findByEmail(req.body.email);
    if (candidate) {
      res.status(400).json({ message: "This email is already in use" });
    } else {
      const salt = bcrypt.genSaltSync(10);
      const password = req.body.password;
      const passwordConfirmation = req.body.passwordConfirmation;
      if (passwordConfirmation !== req.body.password) {
        res.status(401).json({
          message: "The password confirmation doesn't match",
        });
      } else {
        const user = {
          email: req.body.email,
          password: bcrypt.hashSync(password, salt),
          first_name: req.body.first_name,
          last_name: req.body.last_name,
          avatar_path: req.body.avatar_path,
          university: req.body.university,
          phone_number: req.phone_number,
        };
        try {
          await User.saveUser(user);
          res.status(200).json({ message: "Registered successfully" });
        } catch (error) {
          console.log(error.stack);
        }
      }
    }
  }

  async logout(req, res) {
    req.logout();
    res.redirect("/");
  }
}

module.exports = new AuthController();
