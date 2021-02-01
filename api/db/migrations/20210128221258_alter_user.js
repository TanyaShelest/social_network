exports.up = function (knex) {
  return knex.schema.alterTable("users", (table) => {
    table.boolean("active").defaultTo(false);
    table.string("token");
  });
};

exports.down = function (knex) {
  return knex.schema.alterTable("users", (table) => {
    table.dropColumn("active");
  });
};
