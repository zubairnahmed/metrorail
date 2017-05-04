const trainQueries = require('../Database/Queries/trains.queries');
const passengerQueries = require('../Database/Queries/passengers.queries');
const genericQueries = require('../Database/Queries/generic.queries');
const stationQueries = require('../Database/Queries/stations.queries');

module.exports = class Passenger {
  constructor(id = undefined) {
    this.id = id;
    this.name = undefined;
    this.destinationId = undefined;
    this.hasTicket = undefined;
    this.currentTrainId = undefined;
    this.currentStationId = undefined;
  }

  getId() {
    return this.id;
  }

  getName() {
    return this.name;
  }

  getTicket() {
    return this.hasTicket;
  }

  setStation(stationId) {
    this.currentSationId = stationId;
  }

  buyTicket(destinationId) {
    this.destinationId = destinationId;
    this.hasTicket = true;
  }

  useTicket() {
    this.hasTicket = false;
  }

  getCurrentTrain() {
    if( this.currentTrainId === undefined) {
      return Promise.reject(new Error("Passenger is not in a train"));
    }
    return trainQueries.findTrainById(this.currentTrainId);
  }

  getCurrentStation() {
    if( this.currentStationId === undefined ) {
      return Promise.reject(new Error("Passenger is not on a station"));
    }
    return stationQueries.findStationById(this.currentStationId);
  }

}
