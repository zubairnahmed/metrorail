const db = require("../database.js");

const findPassengersByName = (name) => {
  return db("passengers")
    .select()
    .where("name", name);
};

const findPassengersByStation = (stationName) => {
  return db("passengers")
    .join("stations", "passengers.current_station_id", "=", "stations.id")
    .select("passengers.id", "passengers.name", "passengers.destination_id",
      "passengers.has_ticket", "passengers.current_train_id",
      "passengers.current_station_id")
    .where("stations.station_name", stationName);
}

const findPassengersByTrain = (trainId) => {
  return db("passengers")
    .select()
    .where("current_train_id", trainId);
}

module.exports = {
  findPassengersByName: findPassengersByName,
  findPassengersByStation: findPassengersByStation,
  findPassengersByTrain: findPassengersByTrain
};
