const trainQueries = require('../Database/Queries/trains.queries');
const passengerQueries = require('../Database/Queries/passengers.queries');
const genericQueries = require('../Database/Queries/generic.queries');
const stationQueries = require('../Database/Queries/stations.queries');

module.exports = class Station {
  constructor(stationName = "", id = undefined, order = undefined) {
    this.id = id;
    this.stationName = stationName;
    this.order = order;
  }

  getId() {
    return this.id;
  }

  getStationName() {
    return this.stationName;
  }

  getWaitingPassengers() {
    return passengerQueries.findPassengersByStation(this.stationName)
      .catch(error => {
        console.log('An error occured', error);
      });
  }

  getPassengersWithTickets() {
    return passengerQueries.findPassengersByStation(this.stationName)
      .then(data => {
        let filteredData = data.filter(element => {
          return element.has_ticket;
        });
        return filteredData;
      })
      .catch(error => {
        console.log('An error occured', error);
      });
  }

  getPreviousStation() {
    let preOrder = this.order - 1;
    if (preOrder === 0) {
      return stationQueries.getCountOfStations()
        .then(number => number[0].count )
        .then(order => stationQueries.findStationByOrder(order) );
    }
    else {
      return stationQueries.findStationByOrder(preOrder);
    }
  }

  getNextStation() {
    let nextOrder = this.order + 1;
    return stationQueries.getCountOfStations()
      .then(count => {
        if(nextOrder > count) {
          nextOrder = 1;
        }
        return stationQueries.findStationByOrder(nextOrder);
      });
  }

  static getNextTrainOf( name ) {
    return stationQueries.findStationByName(name)
      .then(station => {
        let preOrder = station[0].order - 1;
        if ( preOrder === 0 ) {
          return stationQueries.getCountOfStations()
            .then(count => {
              preOrder = count[0].count;
              return preOrder;
            })
            .then(order => {
              return stationQueries.findStationByOrder(order);
            })
            .then(station => {
              return trainQueries.findTrainsAtStation(station[0].id);
            });
        }
        else {
          return stationQueries.findStationByOrder(preOrder)
            .then( station => {
              return trainQueries.findTrainsAtStation(station[0].id);
            });
        }
      })
  }

  // this finds a station by ID and makes it persist
  loadInstanceOfStationById(id = this.id) {
    return stationQueries.findStationById(id)
      .then(station => {
        this.stationName = station[0].station_name;
        this.order = station[0].order;
        this.id = station[0].id;
        return this;
      })
  }
}
