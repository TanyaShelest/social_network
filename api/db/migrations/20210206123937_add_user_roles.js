exports.up = function (knex) {
  return knex.schema.alterTable("users", (table) => {
    table.boolean("admin").defaultTo(false);
  });
};

exports.down = function (knex) {
  return knex.schema.alterTable("users", (table) => {
    table.dropColumn("admin");
  });
};
