const Station = require('./Classes/station');
const Train = require('./Classes/train');
const Passenger = require("./Classes/passenger");
const db = require('./Database/database');

// User: add code here
station = new Station();
station.stationName = "new Station";


passenger = new Passenger(2);
passenger.currentStationId = 50;

station.save()
  .then(console.log)
  .catch(console.log);
// passenger.getCurrentStation()
//   .then(console.log)
//   .catch(console.log);

setTimeout( () => {
  db.destroy();
}, 2000);
