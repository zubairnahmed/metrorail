const chai = require("chai");
const should = chai.should();
const Station = require("../Classes/station.js");

let station;
beforeEach(() => {
  station = new Station();
  station.id = 1;
  station.stationName = "Downtown";
  station.order = 1;
})
describe("Station Class", () => {

  it("should be a class", () => {
    return Station.should.be.a("function");
  });

  describe("let station = new Station()", () => {
    it("instantiates station with the station Class", () => {
      return station.should.be.a("object");
    });
  });

  describe("station.getId()", () => {
    it("should return passenger id", () => {
      return station.getId().should.be.equal(1);
    });
  });

  describe("station.getStationName()", () => {
    it("should return the name of the station", () => {
      return station.getStationName().should.be.equal("Downtown");
    });
  });

  describe("station.getWaitingPassengers()", () => {
    it("should return a list of passengers waiting at station", () => {
      return station.getWaitingPassengers()
        .then((result) => {
          result.should.be.empty;
        });
    });
  });

  describe("station.getPassengersWithTickets()", () => {
    it("should return a list of passengers with tickets", () => {
      return station.getPassengersWithTickets()
        .then((result) => {
          result.should.be.empty;
        });
    });
  });

  describe("station.getPreviousStation()", () => {
    it("should return a station object", () => {
      return station.getPreviousStation()
        .then((result) => {
          result.should.be.an("array");
          result.length.should.be.equal(1);
        });
    });
  });

  describe("station.getNextStation()", () => {
    it("should return a station object", () => {
      return station.getNextStation()
        .then((result) => {
          result.should.be.an("array");
          result.length.should.be.equal(1);
        })
    })
  });

  describe("Station.getNextTrainOf(station_name)", () => {
    it("should return the next train of given station", () => {

      return station.update()
        .then(() => {
          return Station.getNextTrainOf(station.stationName)
        })
        .then(result => {
          result.should.be.an("array");
          result.length.should.be.equal(0);
        })
    });
  });

  describe("station.loadInstanceOfStationById()", () => {
    it("should load station object with matching data from database", () => {
      return station.loadInstanceOfStationById(3)
        .then(() => {
          station.stationName.should.be.equal("Forest Gardens");
          station.order.should.be.equal(3);
        });
    });
  });

  describe("station.loadInstanceOfStationByName()", () => {
    it("should load station object with matching data from database", () => {
      return station.loadInstanceOfStationByName("Parkside")
        .then(() => {
          station.stationName.should.be.equal("Parkside");
          station.order.should.be.equal(9);
          station.id.should.be.equal(9)
        });
    });
  });

  describe("station = new Station(undefined, \"New Station\")", () => {
    it("should create a new station object with name \"New Station\"", () => {
      station = new Station(undefined, "New Station");
      return station.stationName.should.be.equal("New Station");
    });
  });

  describe("station.save()", () => {
    it("should create a new row on the database for the station object", () => {
      station = new Station(undefined, "New Station");
      return station.save()
        .then(result => {
          station.should.be.equal(result);
          station.getStationName().should.be.equal("New Station");
        })
        .then(() => {
          return station.del();
        });
    });
  });

  describe("station.update()", () => {
    it("should update database with station object", () => {
      station.stationName = "Updated Name";
      return station.update()
        .then(result => {
          station.getStationName().should.be.equal("Updated Name");
          return station.loadInstanceOfStationById()
        })
        .then(result => {
          result.stationName.should.be.equal("Updated Name");
        });
    });
  });

  describe("station.del()", () => {
    it("should delete matching station-row from database", () => {
      station = new Station(undefined, "New Station");
      return station.save()
        .then(result => {
          station.getId().should.exist;
          return station.del()
        })
        .then(result => {
          result.should.be.equal(1);
        })
    })
  })

});
