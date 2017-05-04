const db = require("../database.js");

const findTrain = (num) => {
  return db("trains")
    .select()
    .where("num", "=",  num);
};

const findTrainsAtStation = (stationId) => {
  return db("trains")
    .select()
    .where("current_station_id", "=",  stationId);
};

module.exports = {
  findTrain: findTrain,
  findTrainsAtStation: findTrainsAtStation
};
