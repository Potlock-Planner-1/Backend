
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("guest").del()
    .truncate()
    .then(function () {
      // Inserts seed entries
      return knex("guest").insert([
        { guest_name: "Jack", potluck_id: 1 },
        { guest_name: "Dan", potluck_id: 1 },
        { guest_name: "michael", potluck_id: 1 },
        { guest_name: "blake", potluck_id: 1 },

        { guest_name: "amy", potluck_id: 2 },
        { guest_name: "jenifer", potluck_id: 2 },
        { guest_name: "tom", potluck_id: 2 },
        { guest_name: "bernie", potluck_id: 2 },

        { guest_name: "jose", potluck_id: 3 },
        { guest_name: "peter", potluck_id: 3 },
        { guest_name: "bruce", potluck_id: 3 },
        { guest_name: "robert", potluck_id: 3 },

        { guest_name: "christina", potluck_id: 4 },
        { guest_name: "luke", potluck_id: 4 },
        { guest_name: "bruno", potluck_id: 4 },
        { guest_name: "scarlet", potluck_id: 4 },

        { guest_name: "john", potluck_id: 5 },
        { guest_name: "maria", potluck_id: 5 },
        { guest_name: "jack", potluck_id: 5 },
        { guest_name: "matt", potluck_id: 5 },
    
      ]);
    });
};
