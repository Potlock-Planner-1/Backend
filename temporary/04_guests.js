
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('guest').del()
    .truncate()
    .then(function () {
      // Inserts seed entries
      return knex('guest').insert([
        {id: 1, name: 'joe'},
        {id: 2, name: 'marina'},
        {id: 3, name: 'mars'},
        {id: 4, name: 'parimala'},
        {id: 5, name: 'prakash'},
      ]);
    });
};
