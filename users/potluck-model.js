const db = require("../database/dbConfig.js")

module.exports = {
    add, 
    find,
    findById,
    update,
    remove,
}

function add(potluck) {
    return db("potluck")
        .insert(potluck, "id")
        .then(ids => {
            return findById(ids[0])
        })
}

function find() {
    return db("potluck")
}

function findById(id) {
    return db("potluck") 
        .where({ id })
        .first()
}

function update(change, id) {
    return db("potluck")
        .where({ id })
        .update(changes)
}

function remove(id) {
    return db("potluck")
        .where({ id })
        .del()
}