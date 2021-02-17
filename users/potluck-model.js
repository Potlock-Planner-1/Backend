const db = require("../database/dbConfig.js");

module.exports = {
  add,
  addItem,
  addGuest,
  find,
  findById,
  findItem,
  findGuest,
  update,
  remove,
};

function add(potluck) {
  return db("potluck")
    .insert(potluck, "id")
    .then((ids) => {
      return findById(ids[0]);
    });
}

function addItem(item, potluck_id) {
  return db("item")
    .insert(item, potluck_id)
    .then((ids) => {
      return findItem(ids[0]);
    });
}

function addGuest(guest, potluck_id) {
  return db("guest")
    .insert(guest, potluck_id)
    .then((ids) => {
      return findGuest(ids[0]);
    });
}

function find() {
  return db("potluck");
}

function findById(id) {
  return db("potluck").where({ id }).first();
}

function findItem(item_id) {
  return db("potluck as p")
    .join("item as i", "i.potluck_id", "p.id")
    .select("i.id", "i.claimed", "i.item_name")
    .where("p.id", item_id)
    .orderBy("i.id");
}

function findGuest(guest_id) {
  return db("potluck as p")
    .join("guest as g", "g.potluck_id", "p.id")
    .select("g.id", "g.email", "g.guest_name")
    .where("p.id", guest_id)
    .orderBy("g.id");
}

function update(changes, id) {
  return db("potluck").where({ id }).update(changes);
}

function remove(id) {
  return db("potluck").where({ id }).del();
}
