class PostController {
  async getPosts(req, res) {
    const posts = await req.app.db("posts");
    res.json(posts);
  }

  async getPost(req, res) {
    const post = await req.app.db("posts").where("id", req.params.id);
    res.json(post);
  }

  async createPost(req, res) {}
  async updatePost(req, res) {}
  async deletePost(req, res) {}
}

module.exports = new PostController();
