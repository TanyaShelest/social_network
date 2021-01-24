const JwtStrategy = require("passport-jwt").Strategy;
const ExtractJwt = require("passport-jwt").ExtractJwt;
const User = require("../models/user");

const options = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: process.env.JWT,
};

module.exports = (passport) => {
  return function (req, res, next) {
    passport.use(
      new JwtStrategy(options, async (payload, done) => {
        try {
          const user = await User.findByEmail(payload.email);
          if (user) {
            done(null, user);
          } else {
            done(null, false);
          }
        } catch (error) {
          console.log(error.stack);
        }
      })
    );
    next();
  };
};
