const knex = require('knex');

const knexConfig = require('../knexfile.js');

// const environment = process.env.DB_ENV || "development";
// module.exports = knex(knexConfig[environment]);

//above setting interfering with testing .. need to ask ???? why ????

module.exports = knex(knexConfig.development);