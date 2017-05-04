const db = require("../database.js");

const save = (table, object) => {
  return db(table)
    .returning("id")
    .insert(object)
}

const update = (table, object) => {
  return db(table)
    .returning("id")
    .where("id", "=", object.id)
    .update(object)
}

const del = (table, id) => {
  return db(table)
    .where("id", "=", id)
    .del();
}

module.exports = {
  save: save,
  update: update,
  del: del
};
