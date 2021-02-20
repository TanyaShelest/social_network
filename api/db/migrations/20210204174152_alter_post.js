exports.up = function (knex) {
  return knex.schema.alterTable("posts", (table) => {
    table.integer("user_id").unsigned();
    table
      .foreign("user_id")
      .references("id")
      .inTable("users")
      .onDelete("CASCADE");
  });
};

exports.down = function (knex) {
  return knex.schema.alterTable("posts", (table) => {
    table.dropForeign("user_id");
  });
};
