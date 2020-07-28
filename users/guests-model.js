const db = require("../database/dbConfig.js")

module.exports = {
    add, 
    find,
    findById,
    update,
    remove,
}

function add(guest) {
    return db("guest")
        .insert(guest, "id")
        .then(ids => {
            return findById(ids[0])
        })
}

function find() {
    return db("guest")
}

function findById(id) {
    return db("guest") 
        .where({ id })
        .first()
}

function update(changes, id) {
    return db("guest")
        .where({ id })
        .update(changes)
}

function remove(id) {
    return db("guest")
        .where({ id })
        .del()
}