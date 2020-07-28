const db = require("../database/dgConfig.js")

module.exports = {
    add, 
    find,
    findById,
    update,
    remove,
}

function add(item) {
    return db("item")
        .insert(item, "id")
        .then(ids => {
            return findById(ids[0])
        })
}

function find() {
    return db("item")
}

function findById(id) {
    return db("item") 
        .where({ id })
        .first()
}

function update(change, id) {
    return db("item")
        .where({ id })
        .update(changes)
}

function remove(id) {
    return db("item")
        .where({ id })
        .del()
}