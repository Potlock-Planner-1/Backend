
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("potluck").del()
    .truncate()
    .then(function () {
      // Inserts seed entries
      return knex("potluck").insert([
        { name: "joe's potluck", date: "08-01-2020", time: "9:00", location: "california", host: "joe bay"},
        { name: "marina's potluck", date: "08-01-2020", time: "9:00", location: "california", host: "marina martinez"},
        { name: "mars's potluck", date: "08-01-2020", time: "9:00", location: "california", host: "mars mandes"},
        { name: "parimala's potluck", date: "08-01-2020", time: "9:00", location: "california", host: "parimala vemula"},
        { name: "prakash's potluck", date: "08-01-2020", time: "9:00", location: "california", host: "prakash singh"},
      ])
    });
};
