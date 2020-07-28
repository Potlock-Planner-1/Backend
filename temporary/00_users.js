
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("users").del()
    .truncate()
    .then(function () {
      // Inserts seed entries
      return knex("users").insert([
        { id: 1, username: "joe", password: "bay"},
        { id: 2, username: "marina", password: "martinez"},
        { id: 3, username: "mars", password: "mandes"},
        { id: 4, username: "parimala", password: "vemula"},
        { id: 5, username: "prakash", password: "singh"},
      ]);
    });
};
