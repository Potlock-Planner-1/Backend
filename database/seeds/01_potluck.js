
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("potluck").del()
    .truncate()
    .then(function () {
      // Inserts seed entries
      return knex("potluck").insert([
        { name: "joe's potluck", date: "08-01-2020", time: "9:00", location: "california", user_id: 1 },
        { name: "marina's potluck", date: "08-01-2020", time: "9:00", location: "california", user_id: 2 },
        { name: "mars's potluck", date: "08-01-2020", time: "9:00", location: "california", user_id: 3 },
        { name: "parimala's potluck", date: "08-01-2020", time: "9:00", location: "california", user_id: 4 },
        { name: "prakash's potluck", date: "08-01-2020", time: "9:00", location: "california", user_id: 5 },
      ])
    });
};
