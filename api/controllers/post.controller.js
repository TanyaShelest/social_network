const Post = require("../models/post");

class PostController {
  async getPosts(req, res) {
    const posts = await req.app.db("posts");
    res.json(posts);
  }

  async getPost(req, res) {
    const post = await Post.findById(req.params.id);
    if (!post) {
      res.status(404).json({ message: "Nothing found" });
    }
    res.json(post);
  }

  async createPost(req, res) {}
  async updatePost(req, res) {}
  async deletePost(req, res) {}
}

module.exports = new PostController();
