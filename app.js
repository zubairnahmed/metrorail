const Station = require('./Classes/station');
const Train = require('./Classes/train')
const Passenger = require("./Classes/passenger");
const db = require('./Database/database');

// User: add code here
passenger = new Passenger(2);
passenger.currentStationId = 50;

passenger.getCurrentStation()
  .then(console.log)
  .catch(console.log);

setTimeout( () => {
  db.destroy();
}, 2000);
