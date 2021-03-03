exports.up = function (knex) {
  return knex.schema
    .createTable("roles", (roleTbl) => {
      roleTbl.increments();

      roleTbl.string("role_name", 128).notNullable().unique();
    })

    .createTable("users", (UsersTbl) => {
      UsersTbl.increments();

      UsersTbl.string("username", 256).notNullable().unique().index();

      UsersTbl.string("password", 256).notNullable();

      UsersTbl.string("role_name")
        .unsigned()
        .references("role_name")
        .inTable("role")
        .notNullable();
    })

    .createTable("guest", (guestTbl) => {
      guestTbl.increments();

      guestTbl.string("guest_name", 256).notNullable();

      guestTbl.string("email", 256).notNullable();

      guestTbl
        .integer("user_id")
        .unsigned()
        .references("id")
        .inTable("users")
        .onUpdate("CASCADE")
        .onDelete("CASCADE");

      guestTbl
        .integer("potluck_id")
        .unsigned()
        .references("id")
        .inTable("potluck")
        .notNullable()
        .onUpdate("CASCADE")
        .onDelete("CASCADE");

      guestTbl
        .string("role_name")
        .unsigned()
        .references("role_name")
        .inTable("role")
        .notNullable()
        .onUpdate("CASCADE")
        .onDelete("CASCADE");
    })

    .createTable("potluck", (potluckTbl) => {
      potluckTbl.increments();

      potluckTbl.string("name", 256).notNullable().unique();

      potluckTbl.date("date", 256).notNullable();

      potluckTbl.time("time", 256).notNullable();

      potluckTbl.string("location", 256).notNullable();

      potluckTbl
        .integer("user_id")
        .unsigned()
        .references("id")
        .inTable("users")
        .notNullable()
        .onUpdate("CASCADE")
        .onDelete("CASCADE");
    })

    .createTable("item", (itemTbl) => {
      itemTbl.increments();

      itemTbl.string("item_name", 256).notNullable();

      itemTbl.integer("claimed").notNullable();

      itemTbl
        .integer("potluck_id")
        .unsigned()
        .references("id")
        .inTable("potluck")
        .notNullable()
        .onUpdate("CASCADE")
        .onDelete("RESTRICT");
    });

  // .createTable("linked", (linkedTbl) => {
  //   linkedTbl
  //     .integer("item_id")
  //     .unsigned()
  //     .references("id")
  //     .inTable("item")
  //     .notNullable()
  //     .onUpdate("CASCADE")
  //     .onDelete("CASCADE");

  //   linkedTbl
  //     .integer("user_id")
  //     .unsigned()
  //     .references("id")
  //     .inTable("users")
  //     .notNullable()
  //     .onUpdate("CASCADE")
  //     .onDelete("CASCADE");

  //   linkedTbl
  //     .integer("potluck_id")
  //     .unsigned()
  //     .references("id")
  //     .inTable("potluck")
  //     .notNullable()
  //     .onUpdate("CASCADE")
  //     .onDelete("CASCADE");
  // })
};

exports.down = function (knex) {
  return (
    knex.schema
      // .dropTableIfExists("linked")
      .dropTableIfExists("item")
      .dropTableIfExists("potluck")
      .dropTableIfExists("guest")
      .dropTableIfExists("users")
      .dropTableIfExists("roles")
  );
};

//   .createTable('linkedTable', function (table) {
//         table
//           .integer('buyerId')
//           .unsigned()
//           .references('id')
//           .inTable('buyer')
//           .notNullable()
//           .onUpdate('CASCADE')
//           .onDelete('CASCADE');
//         table
//           .integer('orderId')
//           .unsigned()
//           .references('id')
//           .inTable('order')
//           .notNullable()
//           .onUpdate('CASCADE')
//           .onDelete('CASCADE');
//       });

// .dropTableIfExists('linkedTable')
//
