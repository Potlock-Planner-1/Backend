
exports.up = function(knex) {
  return knex.schema
    .createTable("role", tbl => {
        tbl. increments();

        tbl.string("name", 128)
            .notNullable()
            .unique();
    })

    .createTable("users", tbl => {
        tbl.increments();

        tbl.string("email", 256)
            .notNullable()
            .unique()
            .index();
        tbl.string("password", 256)
            .notNullable();

        tbl. integer("role")
            .unsigned()
            .reference("roles.id")
            .onDelete("RESTRICT")
            .onUpdate("CASCADE")
    })
};

exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists("roles")
    .dropTableIfExists("users")
};
