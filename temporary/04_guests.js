
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('guest').del()
    .truncate()
    .then(function () {
      // Inserts seed entries
      return knex('guest').insert([
        { name: 'joe'},
        { name: 'marina'},
        { name: 'mars'},
        { name: 'parimala'},
        { name: 'prakash'},
      ]);
    });
};
