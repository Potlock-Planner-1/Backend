exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("users")
    .del()
    .truncate()
    .then(function () {
      // Inserts seed entries
      return knex("users").insert([
        {
          username: "joe bay",
          password:
            "$2a$08$i4aIo2VfB6TsFT.i455R4OTZP23cIcClQU04rIrSNz/Bwxwh2T2lW",
          role_name: "organizer",
        },
        {
          username: "marina martinez",
          password:
            "$2a$08$i4aIo2VfB6TsFT.i455R4OTZP23cIcClQU04rIrSNz/Bwxwh2T2lW",
          role_name: "organizer",
        },
        {
          username: "mars mandes",
          password:
            "$2a$08$i4aIo2VfB6TsFT.i455R4OTZP23cIcClQU04rIrSNz/Bwxwh2T2lW",
          role_name: "organizer",
        },
        {
          username: "parimala vemula",
          password:
            "$2a$08$i4aIo2VfB6TsFT.i455R4OTZP23cIcClQU04rIrSNz/Bwxwh2T2lW",
          role_name: "organizer",
        },
        {
          username: "prakash singh",
          password:
            "$2a$08$i4aIo2VfB6TsFT.i455R4OTZP23cIcClQU04rIrSNz/Bwxwh2T2lW",
          role_name: "admin",
        },
      ]);
    });
};
