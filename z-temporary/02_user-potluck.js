
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('linked').del()
    .then(function () {
      // Inserts seed entries
      return knex('linked').insert([
        {item_id: 1, user_id: 5, potluck_id: 4},
        {item_id: 2, user_id: 1, potluck_id: 5},
        {item_id: 3, user_id: 3, potluck_id: 3},
        {item_id: 4, user_id: 4, potluck_id: 1},
        {item_id: 5, user_id: 2, potluck_id: 2},

      ]);
    });
};
