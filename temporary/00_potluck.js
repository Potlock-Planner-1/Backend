
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("potluck").del()
    .truncate()
    .then(function () {
      // Inserts seed entries
      return knex("potluck").insert([
        { id: 1, name: "joe's potluck", date: "08-01-2020", time: "9:00", location: "california", host: "joe bay"},
        { id: 2, name: "marina's potluck", date: "08-01-2020", time: "9:00", location: "california", host: "marina martinez"},
        { id: 3, name: "mars's potluck", date: "08-01-2020", time: "9:00", location: "california", host: "mars mandes"},
        { id: 4, name: "parimala's potluck", date: "08-01-2020", time: "9:00", location: "california", host: "parimala vemula"},
        { id: 5, name: "prakash's potluck", date: "08-01-2020", time: "9:00", location: "california", host: "prakash singh"},
      ])
    });
};
