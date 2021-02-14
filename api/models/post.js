const diContainer = require("../services/diContainer");
const db = diContainer.get("db");

class Post {
  static tableName = "posts";

  static async findById(postId) {
    return db.select().from(Post.tableName).where("id", "=", postId).first();
  }

  static async findAuthor(postId) {
    return db.select().from(Post.tableName).where({ id: postId }).first();
  }
}

module.exports = Post;
