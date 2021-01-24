const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const bcrypt = require("bcrypt");
const User = require("../../models/user");

passport.use(
  "login",
  new LocalStrategy(
    { usernameField: "email", passwordField: "password", session: false },
    async (email, password, done) => {
      try {
        const user = await User.findByEmail(email);
        if (!user) {
          return done(null, false, { message: "User not found" });
        }
        // Check for passwords match:
        const pwdMatch = await bcrypt.compare(password, user.password);
        if (!pwdMatch) {
          // Authentication failure:
          return done(null, false, { message: "The password doesn't match" });
        }
        // Everything is ok, let's proceed:
        return done(null, user, { message: "Logged in successfully" });
      } catch (e) {
        console.log(e.stack);
        return done(e);
      }
    }
  )
);

module.exports = passport;
