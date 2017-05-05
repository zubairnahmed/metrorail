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
    this.currentStationId = stationId;
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

  static findPassengersAtStation(stationId) {
    return passengerQueries.findPassengersByStation(stationId);
  }

  static findPassengersOnTrain(trainId) {
    return passengerQueries.findPassengersByTrain(trainId);
  }

  formatForDb() {
    return {
      id: this.id,
      name: this.name,
      destination_id: this.destinationId,
      has_ticket: this.hasTicket,
      current_train_id: this.currentTrainId,
      current_station_id: this.currentStationId
    };
  }

  save() {
    return genericQueries.save("passengers", this.formatForDb())
      .then(id => {
        this.id = id[0];
        return this;
      })
  }

  update() {
    return genericQueries.update("passengers", this.formatForDb());
  }

  del() {
    return genericQueries.del("passengers", this.id);
  }

  loadInstanceOfPassengerById(passengerId = this.id) {
    return passengerQueries.findPassengerById(passengerId)
      .then(passenger => {
        this.id = passenger.id;
        this.name = passenger.name;
        this.destinationId = passenger.destination_id;
        this.hasTicket = passenger.has_ticket;
        this.currentTrainId = passenger.current_train_id;
        this.currentStationId = passenger.current_station_id;
        return this;
      })
      .catch(error => {
        console.log("An error occurred: ", error);
      });
  }

  loadInstanceOfPassengerByName(passengerName = this.name) {
    return passengerQueries.findPassengersByName(passengerName)
      .then(passengers => {
        if (passengers.length > 1) {
          console.log('There are more than one passengers with this name. We are loading the first instance of the passenger.');
        }
        this.id = passengers[0].id;
        this.name = passengers[0].name;
        this.destinationId = passengers[0].destination_id;
        this.hasTicket = passengers[0].has_ticket;
        this.currentTrainId = passengers[0].current_train_id;
        this.currentStationId = passengers[0].current_station_id;
        return this;
      })
  }

}
