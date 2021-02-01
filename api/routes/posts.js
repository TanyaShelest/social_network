const router = require("express").Router();
const postController = require("../controllers/post.controller");
const passport = require("passport");

router.get("/post/:id(\\d+)", postController.getPost);

router.get(
  "/posts",
  passport.authenticate("jwt", { session: false }),
  postController.getPosts
);

router.post(
  "/post/create",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    res.send("Create a post");
  }
);

router.put("/post/:id(\\d+)/update", (req, res) => {
  res.send("Update a post");
});

router.delete("/post/:id(\\d+)/delete", (req, res) => {
  res.send("Delete a post");
});

module.exports = router;
