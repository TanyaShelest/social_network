const db = require("../services/db-connection");

class User {
  static tableName = "users";

  static async findByEmail(email) {
    return db.select().from(User.tableName).where({ email: email }).first();
  }

  static async saveUser(user) {
    let result = null;
    if (user.id) {
      result = db(User.tableName).where("id", "=", user.id).update();
    } else {
      result = db(User.tableName).insert({
        ...user,
      });
    }
    return result;
  }

  static async setActive(userId) {
    return db(User.tableName).where({ id: userId }).update({ active: true });
  }

  static findByToken(token) {
    return db.select("id").from(User.tableName).where({ token: token }).first();
  }
}

module.exports = User;
