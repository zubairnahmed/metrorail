const db = require("../database.js");

const findTrainByNumber = (number) => {
  return db("trains")
    .select()
    .where("number", "=",  number);
};

const findTrainById = (id) => {
  return db("trains")
    .select()
    .where("id", "=",  id);
};

const findTrainsAtStation = (stationId) => {
  return db("trains")
    .select()
    .where("current_station_id", "=",  stationId);
};

module.exports = {
  findTrainByNumber: findTrainByNumber,
  findTrainById: findTrainById,
  findTrainsAtStation: findTrainsAtStation
};
