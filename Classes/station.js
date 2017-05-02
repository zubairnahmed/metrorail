module.exports = class Station {
  constructor(locationName = "") {
    this.locationName = locationName;
    this.id = -1;
    this.listOfPassengers = [];
    this.nextStation = 0;
    this.previousStation = 1;
  }

  getId() {
    return this.id;
  }

  getLocationName() {
    return this.locationName;
  }

  getWaitingPassengers() {
    // returns the passengers waiting in a given station
    return this.listOfPassengers;
  }

  getPassengersWithTickets() {
    // returns passengers whose hasTicket property is true
  }

  getPreviousStation() {
    // returns the previous station, which it finds from the station id
    return Station.findStationById(this.previousStation);
  }

  getNextStation() {
    // returns the previous station, which it finds from the station id
    return Station.findStationById(this.nextStation);
  }

  static getNextTrainOf(name) {
    // returns the next train that's coming into 'name', which is the station name
  }

  static findStationById(id) {
    let station1 = {
      id: 0,
      locationName: "station1"
    }

    let station2 = {
      id: 1,
      locationName: "station2"
    }

    let arr = [station1, station2];
    return arr[id];
  }

  static findStationByLocation(locationName) {
    // query to retrieve station information from database
  }
}
