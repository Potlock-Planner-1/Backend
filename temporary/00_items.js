
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('item').del()
    .then(function () {
      // Inserts seed entries
      return knex('item').insert([
        {id: 1, item_name: 'chicken pizza', claimed: true, potluck_id: 1},
        { id: 2, item_name: 'burger', claimed: true, potluck_id: 5},
        { id: 3, item_name: 'pasta', claimed: false, potluck_id: 2},
        { id: 4, item_name: 'salad', claimed: true, potluck_id: 4},
        { id: 5, item_name: 'apple pie', claimed: false, potluck_id: 3},
        { id: 6, item_name: 'cheesecake', claimed: false, potluck_id: 5},
        { id: 7, item_name: 'mashed potato', claimed: true, potluck_id: 3},
        { id: 8, item_name: 'corn', claimed: true, potluck_id: 4},
        { id: 9, item_name: 'stake', claimed: false, potluck_id: 1},
        { id: 10, item_name: 'soup', claimed: true, potluck_id: 2},
        { id: 11, item_name: 'grilled cheese', claimed: true, potluck_id: 1},

      ]);
    });
};
