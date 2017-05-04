const Station = require('./Classes/station');

const station1 = new Station('sdfksdfkjh', 1, 1);

// station1.getWaitingPassengers(data => {
//   console.log(data);
// });

// station1.getPassengersWithTickets(data => {
//   console.log(data);
// });

// station1.getPreviousStation(console.log);
// station1.getNextStation(console.log);
// Station.getNextTrainOf(station1.stationName, console.log);

station1.loadInstanceOfStationById().then(data => {
  console.log('This is the station', station1);
});
