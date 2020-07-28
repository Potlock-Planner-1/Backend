
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("users").del()
    .truncate()
    .then(function () {
      // Inserts seed entries
      return knex("users").insert([
        { username: "joe", password: "bay"},
        { username: "marina", password: "martinez"},
        { username: "mars", password: "mandes"},
        { username: "parimala", password: "vemula"},
        { username: "prakash", password: "singh"},
      ]);
    });
};
