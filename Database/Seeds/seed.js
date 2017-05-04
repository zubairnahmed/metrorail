const db = require('../database');

const trainData = [
    {
      number: 1,
      capacity: 55,
      number_of_passengers: 0
    },
    {
      number: 2,
      capacity: 120,
      number_of_passengers: 0
    },
    {
      number: 3,
      capacity: 23,
      number_of_passengers: 0
    },
    {
      number: 4,
      capacity: 70,
      number_of_passengers: 0
    }
];

const stationData = [
  {
    station_name: "Downtown"
  },
  {
    station_name: "Elm Street"
  },
  {
    station_name: "Forest Gardens"
  },
  {
    station_name: "Annex"
  },
  {
    station_name: "10th Ave"
  },
  {
    station_name: "Waterfront"
  },
  {
    station_name: "Colosseum"
  },
  {
    station_name: "Central Station"
  },
  {
    station_name: "Parkside"
  },
  {
    station_name: "Grand Boulevard"
  },
  {
    station_name: "Monument Valley"
  },
  {
    station_name: "Museum Isle"
  }
];

const passengerData = [
  {
    name: "John Dope",
    has_ticket: false
  },
  {
    name: "Sabrina Smith",
    has_ticket: false
  },
  {
    name: "Anish Sadhaji",
    has_ticket: false
  },
  {
    name: "Pooh Bear",
    has_ticket: false
  }
];

exports.seed = (knex, promise) => {
  let promises = [];
  stationData.forEach(data => {
    promises.push(insertData(knex, data, "stations"));
  });
  trainData.forEach(data => {
    promises.push(insertData(knex, data, "trains"));
  });
  passengerData.forEach(data => {
    promises.push(insertData(knex, data, "passengers"));
  });
  return Promise.all(promises);
}

function insertData(knex, data, table) {
  return knex.insert(data)
  .into(table);
}
