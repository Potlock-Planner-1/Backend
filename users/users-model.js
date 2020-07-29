const db = require("../database/dbConfig.js")

module.exports = {
    find,
    findById,
    findPotlucks,
    add,
    addPotlucks,
    update,
    remove
}

//<:<:<:<:<:<: GET :>:>:>:>:>:>\\

function find() {
    return db("users")
}

function findById(id) {
    return db("users")
        .where({ id })
        .first()
}

function findPotlucks(potlucks_id) {
    console.log(potlucks_id, "potlucks_id")
    return db("users as u")
        .join("potluck as p", "p.user_id", "u.id" )
        .select("u.username", "p.name", "p.id", "p.time", "p.date", "p.location")
        .where("u.id", potlucks_id)
        .orderBy("p.id")
}

//<:<:<:<:<:<: POST :>:>:>:>:>:>\\

function add(user) {
    return db("users")
        .insert(user, "id")
        .then(ids => {
            return findById(ids[0])
        })
}

function addPotlucks(potluck, user_id) {
    return db("potluck")
        .insert(potluck, user_id)
        .then(ids => {
            return findPotlucks(ids[0])
        })
}

//<:<:<:<:<:<: PUT :>:>:>:>:>:>\\

function update(changes, id) {
    return db("users")
        .where({ id })
        .update(changes)
        .then(() => {
            return findById(id);
        });
}

//<:<:<:<:<:<: DELETE :>:>:>:>:>:>\\

function remove(id) {
    return db("users")
    .where({ id })
    .del()
}