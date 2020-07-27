
exports.up = function(knex) {
  return knex.schema
    .createTable("role", roleTbl => {
        roleTbl. increments();

        roleTbl.string("name", 128)
            .notNullable()
            .unique();
    })

    .createTable("users", UsersTbl => {
        UsersTbl.increments();

        UsersTbl.string("username", 256)
            .notNullable()
            .unique()
            .index();

        UsersTbl.string("password", 256)
            .notNullable();

        UsersTbl.integer("role_id")
            .unsigned()
            .references("id")
            .inTable("role")
    })

    .createTable("potluck", potluckTbl => {
        potluckTbl.increments();

        potluckTbl.string("name", 256)
                .notNullable()
                .unique()

        potluckTbl.date("date", 256)
                .notNullable()

        potluckTbl.time("time", 256)
                .notNullable()

        potluckTbl.string("location", 256)
                .notNullable()

        potluckTbl.string("host", 256)
                .unsigned()
                .references("id")
                .inTable("users")
                .notNullable("CASCADE")
                .onDelete("CASCADE")
    })

    .createTable("item", itemTbl => {
        itemTbl.increments()

        itemTbl.string("item_name", 256)
                .notNullable()

        itemTbl.integer("claimed")
                .notNullable()

        itemTbl.integer("potluck_id")
                .unsigned()
                .references("id")
                .inTable("potluck")
                .notNullable()
                .onUpdate("CASCADE")
                .onDelete("RESTRICT")
    })

    .createTable("linked", linkedTbl => {
        linkedTbl.integer("item_id")
                .unsigned()
                .references("id")
                .inTable("item")
                .notNullable()
                .onUpdate("CASCADE")
                .onDelete("CASCADE")

        linkedTbl.integer("user_id")
                .unsigned()
                .references("id")
                .inTable("users")
                .notNullable()
                .onUpdate("CASCADE")
                .onDelete("CASCADE")

        linkedTbl.integer("potluck_id")
                .unsigned()
                .references("id")
                .inTable("potluck")
                .notNullable()
                .onUpdate("CASCADE")
                .onDelete("CASCADE")
    })

};

exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists("linked")
    .dropTableIfExists("item")
    .dropTableIfExists("potluck")
    .dropTableIfExists("roles")
    .dropTableIfExists("users")
};
