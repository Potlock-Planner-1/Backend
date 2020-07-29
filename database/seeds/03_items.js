
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("item").del()
    .then(function () {
      // Inserts seed entries
      return knex("item").insert([
        { item_name: "chicken pizza", claimed: true, potluck_id: 1},
        { item_name: "burger", claimed: true, potluck_id: 5},
        { item_name: "pasta", claimed: false, potluck_id: 2},
        { item_name: "salad", claimed: true, potluck_id: 4},
        { item_name: "apple pie", claimed: false, potluck_id: 3},
        { item_name: "cheesecake", claimed: false, potluck_id: 5},
        { item_name: "mashed potato", claimed: true, potluck_id: 3},
        { item_name: "corn", claimed: true, potluck_id: 4},
        { item_name: "stake", claimed: false, potluck_id: 1},
        { item_name: "soup", claimed: true, potluck_id: 2},
        { item_name: "grilled cheese", claimed: true, potluck_id: 1},

      ]);
    });
};
