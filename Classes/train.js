const trainQueries = require('../Database/Queries/trains.queries');
const passengerQueries = require('../Database/Queries/passengers.queries');
const genericQueries = require('../Database/Queries/generic.queries');
const stationQueries = require('../Database/Queries/stations.queries');

module.exports = class Train {
  constructor(id = undefined, number = undefined, capacity = undefined) {
    this.id = id;
    this.number = number;
    this.numberOfPassengers = undefined;
    this.capacity = capacity;
    this.currentStationId = undefined;
  }

  getNumber() {
    return this.number;
  }

  getCapacity() {
    return this.capacity;
  }

  getPassengers() {
    return passengerQueries.findPassengersByTrain(this.id)
      .catch(error => {
        console.log('An error occured:', error);
      })
  }

  isFull() {
    return this.capacity === this.numberOfPassengers;
  }

  getCurrentStation() {
    return stationQueries.findStationById(this.currentStationId)
      .then(station => {
        return station[0];
      })
      .catch(error => {
        console.log('An error occured:', error);
      });
  }

  getNextStation() {
    return Promise.all([
      stationQueries.findStationById( this.currentStationId ),
      stationQueries.getCountOfStations()
    ])
    .then( ([ station, count ]) => {
      // return (( station[ 0 ].order + 1 ) % ( station[ 0 ].order + 1 )) || 1;
      if ((station[0].order + 1) > count[0].count) {
        return 1;
      }
      else return station[0].order + 1;
    })
    .then( stationQueries.findStationByOrder )
    .then( nextStation => nextStation[ 0 ] )
    .catch( error => console.log( 'An error occurred', error ))
  }

  moveTrain() {
    return this.getNextStation()
      .then(station => {
        this.currentStationId = station.id;
        return station;
      })
  }

  offBoard() {
    return passengerQueries.findDesAndTrainId(this.currentStationId, this.id)
      .then(passengers => {
        let promises = [];
        passengers.forEach(passenger => {
          passenger.destination_id = null;
          passenger.current_station_id = this.currentStationId;
          passenger.current_train_id = null;
          passenger.has_ticket = false;
          promises.push(genericQueries.update("passengers", passenger));
        })
        return Promise.all(promises);
      })
      .catch(error => {
        console.log('An error occurred: ', error);
      })
  }

  onBoard() {
    return passengerQueries.findByStationIdAndTicket(this.currentStationId)
      .then(passengers => {
        let promises = [];
        passengers.forEach(passenger => {
          passenger.current_station_id = null;
          passenger.current_train_id = this.id;
          promises.push(genericQueries.update("passengers", passenger));
        })
        return Promise.all(promises);
      })
  }

  loadInstanceOfTrainById(id = this.id) {
    return trainQueries.findTrainById(id)
      .then(train => {
        this.id = train.id;
        this.number = train.number;
        this.numberOfPassengers = train.number_of_passengers;
        this.capacity = train.capacity;
        this.currentStationId = train.current_station_id;
        return this;
      })
      .catch(error => {
        console.log(error);
      });
  }

  loadInstanceOfTrainByNum(number = this.number) {
    return trainQueries.findTrainByNumber(number)
      .then(train => {
        if (train.length > 1) {
          console.log('There are more than one trains with this number. We are loading the first instance of the train.');
        }
        this.id = train[0].id;
        this.number = train[0].number;
        this.numberOfPassengers = train[0].number_of_passengers;
        this.capacity = train[0].capacity;
        this.currentStationId = train[0].current_station_id;
        return this;
      })
      .catch(error => {
        console.log(error);
      });
  }

}
