const db = require("../database.js");

const findStationById = (id) => {
  return db("stations")
    .select()
    .where("id", "=", id);
};

const findStationByName = (name) => {
  return db("stations")
    .select()
    .where("station_name", "=",  name);
};


module.exports = {
  findStationById: findStationById,
  findStationByName: findStationByName
};
