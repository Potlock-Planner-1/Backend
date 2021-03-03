exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("guest")
    .del()
    .truncate()
    .then(function () {
      // Inserts seed entries
      return knex("guest").insert([
        {
          guest_name: "Jack",
          email: "jack@gmail.com",
          potluck_id: 1,
          role_name: "guest",
          user_id: 1,
        },
        {
          guest_name: "Dan",
          email: "dan@gmail.com",
          potluck_id: 1,
          role_name: "guest",
          user_id: 1,
        },
        {
          guest_name: "michael",
          email: "michael@gmail.com",
          potluck_id: 1,
          role_name: "guest",
          user_id: 1,
        },
        {
          guest_name: "blake",
          email: "blake@gmail.com",
          potluck_id: 1,
          role_name: "guest",
          user_id: 1,
        },

        {
          guest_name: "amy",
          email: "amy@gmail.com",
          potluck_id: 2,
          role_name: "guest",
          user_id: 2,
        },
        {
          guest_name: "jenifer",
          email: "jenifer@gmail.com",
          potluck_id: 2,
          role_name: "guest",
          user_id: 2,
        },
        {
          guest_name: "tom",
          email: "tom@gmail.com",
          potluck_id: 2,
          role_name: "guest",
          user_id: 2,
        },
        {
          guest_name: "bernie",
          email: "bernie@gmail.com",
          potluck_id: 2,
          role_name: "guest",
          user_id: 2,
        },

        {
          guest_name: "jose",
          email: "jose@gmail.com",
          potluck_id: 3,
          role_name: "guest",
          user_id: 3,
        },
        {
          guest_name: "peter",
          email: "peter@gmail.com",
          potluck_id: 3,
          role_name: "guest",
          user_id: 3,
        },
        {
          guest_name: "bruce",
          email: "bruce@gmail.com",
          potluck_id: 3,
          role_name: "guest",
          user_id: 3,
        },
        {
          guest_name: "robert",
          email: "robert@gmail.com",
          potluck_id: 3,
          role_name: "guest",
          user_id: 4,
        },

        {
          guest_name: "christina",
          email: "christina@gmail.com",
          potluck_id: 4,
          role_name: "guest",
          user_id: 4,
        },
        {
          guest_name: "luke",
          email: "luke@gmail.com",
          potluck_id: 4,
          role_name: "guest",
          user_id: 4,
        },
        {
          guest_name: "bruno",
          email: "bruno@gmail.com",
          potluck_id: 4,
          role_name: "guest",
          user_id: 4,
        },
        {
          guest_name: "scarlet",
          email: "scarlet@gmail.com",
          potluck_id: 4,
          role_name: "guest",
          user_id: 4,
        },

        {
          guest_name: "john",
          email: "john@gmail.com",
          potluck_id: 5,
          role_name: "guest",
          user_id: 5,
        },
        {
          guest_name: "maria",
          email: "maria@gmail.com",
          potluck_id: 5,
          role_name: "guest",
          user_id: 5,
        },
        {
          guest_name: "jack",
          email: "jack@gmail.com",
          potluck_id: 5,
          role_name: "guest",
          user_id: 5,
        },
        {
          guest_name: "matt",
          email: "matt@gmail.com",
          potluck_id: 5,
          role_name: "guest",
          user_id: 5,
        },
      ]);
    });
};
