const db = require("../database.js");

const findTrainByNumber = (number) => {
  return db("trains")
    .where("number", number);
};

const findTrainById = (id) => {
  return db("trains")
    .where("id", id)
    .first();
};

const findTrainsAtStation = (stationId) => {
  return db("trains")
    .where("current_station_id", stationId);
};

module.exports = {
  findTrainByNumber: findTrainByNumber,
  findTrainById: findTrainById,
  findTrainsAtStation: findTrainsAtStation
};
