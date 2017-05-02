const Station = require('./Classes/station');

let station1 = new Station("station3");

console.log(Station.findStationById(1));

console.log(station1.getNextStation());
