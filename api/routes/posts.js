const router = require("express").Router();
const passport = require("passport");
const postController = require("../controllers/post.controller");
const checkAuthorized = require("../middleware/check-authorized");
const Post = require("../models/post");

router.get(
  "/",
  passport.authenticate("jwt", { session: false }),
  postController.getPosts
);

router.get(
  "/:id(\\d+)",
  passport.authenticate("jwt", { session: false }),
  postController.getPost
);

router.post(
  "/",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    res.send("Create a post");
  }
);

router.put("/:id(\\d+)", checkAuthorized({ model: Post }), (req, res) => {
  res.send("Update a post");
});

router.delete("/:id(\\d+)", checkAuthorized({ model: Post }), (req, res) => {
  res.send("Delete a post");
});

module.exports = router;
