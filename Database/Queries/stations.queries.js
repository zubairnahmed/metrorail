const db = require("../database.js");

const findStationById = (id) => {
  return db("stations")
    .select()
    .where("id", "=", id);
};

const findStationByOrder = (order) => {
  return db("stations")
    .select()
    .where("order", "=", order);
};

const findStationByName = (name) => {
  return db("stations")
    .select()
    .where("station_name", "=",  name);
};

const getCountOfStations = () => {
  return db("stations").count();
}


module.exports = {
  findStationById: findStationById,
  findStationByOrder: findStationByOrder,
  findStationByName: findStationByName,
  getCountOfStations: getCountOfStations
};
