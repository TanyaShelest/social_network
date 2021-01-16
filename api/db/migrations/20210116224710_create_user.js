exports.up = function (knex) {
  return knex.schema.createTable("users", (table) => {
    table.increments();
    table.string("email");
    table.string("password");
    table.string("first_name");
    table.string("last_name");
    table.string("avatar_path");
    table.string("university");
    table.string("phone_number");
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable("users");
};
