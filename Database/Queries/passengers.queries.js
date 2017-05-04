const db = require("../database.js");

const findPassengersByName = (name) => {
  return db("passengers")
    .where("name", name);
};

const findPassengersByStation = (stationName) => {
  return db("passengers")
    .join("stations", "passengers.current_station_id", "=", "stations.id")
    .select("passengers.id", "passengers.name", "passengers.destination_id",
      "passengers.has_ticket", "passengers.current_train_id",
      "passengers.current_station_id")
    .where("stations.station_name", stationName);
};

const findByStationIdAndTicket = (stationId) => {
  return db("passengers")
    .where({
      current_station_id: stationId,
      has_ticket: true
    })
};
const findPassengersByTrain = (trainId) => {
  return db("passengers")
    .where("current_train_id", trainId);
};

const findPassengerById = (passengerId) => {
  return db("passengers")
    .where("id", passengerId)
    .first();
};

const findDesAndTrainId = (destinationId, trainId) => {
  return db("passengers")
    .where({
      destination_id: destinationId,
      current_train_id: trainId
    })
};

module.exports = {
  findPassengersByName: findPassengersByName,
  findPassengersByStation: findPassengersByStation,
  findPassengersByTrain: findPassengersByTrain,
  findPassengerById: findPassengerById,
  findDesAndTrainId: findDesAndTrainId,
  findByStationIdAndTicket: findByStationIdAndTicket
};
