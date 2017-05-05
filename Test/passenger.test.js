
const chai = require("chai");
const should = chai.should();
const Passenger = require("../Classes/passenger.js");

let passenger;

beforeEach(() => {
  passenger = new Passenger();
  passenger.id = 1;
  passenger.name = "Jo Santa";
  passenger.hasTicket = false;
})

describe("Passenger Class", () => {

  it("should be a class", () => {
    Passenger.should.be.a("function");
  });

  describe("passenger.getId()", () => {
    it("should return passenger id", () => {
      return passenger.getId().should.be.equal(1);
    });
  });

  describe("passenger.getName()", () => {
    it("should return the passenger's name", () => {
      passenger.getName().should.be.equal(passenger.name);
    });
  });

  describe("passenger.getTicket()", () => {
    it("should return whether passenger has a ticket", () => {
      passenger.getTicket().should.be.false;
    });
  });

  describe("passenger.setStation(station_id)", () => {
    it("should set the passenger station", () => {
      passenger.setStation(1);
      console.log(passenger.currentStationId);
      passenger.currentStationId.should.be.equal(1);
    });
  });

  describe("passenger.buyTicket(destination_id)", () => {
    it("should set ticket and destination of passenger", () => {
      passenger.buyTicket(6);
      passenger.hasTicket.should.be.true;
      passenger.destinationId.should.be.equal(6);
    })
  })

  describe("passenger.useTicket()", () => {
    it("should remove ticket from passenger", () => {
      passenger.buyTicket(6);
      passenger.useTicket();
      passenger.hasTicket.should.be.false;
    });
  });

  describe("passenger.getCurrentTrain()", () => {
    it("should return the current train of passenger", () => {
      passenger.currentTrainId = 1;
      return passenger.getCurrentTrain()
        .then(result => {
          result.should.be.an("object");
        });
    });
  });

  describe("passenger.getCurrentStation()", () => {
    it("should return the current station of passenger", () => {
      passenger.currentStationId = 1;
      return passenger.getCurrentStation()
        .then(result => {
          result.should.be.an("array");
          result.length.should.be.equal(1);
        });
    });
  });

  describe("passenger.loadInstanceOfPassengerById(id)", () => {
    it("should load the passenger instance with database row", () => {
      return passenger.loadInstanceOfPassengerById(2)
        .then(result => {
          result.id.should.be.equal(2);
        });
    });
  });

  describe("passenger.loadInstanceOfPassengerByName(name)", () => {
    it("should load the passenger instance with database row", () => {
      return passenger.loadInstanceOfPassengerByName("Pooh Bear")
        .then(result => {
          passenger.id.should.be.equal(4);
        });
    });
  });

  describe("Passenger.findPassengersAtStation(station_id)", () => {
    it("should return passengers at station", () => {
      return Passenger.findPassengersAtStation(1)
        .then(result => {
          result.should.be.an("array");
        });
    });
  });

  describe("Passenger.findPassengersOnTrain(train_id)", () => {
    it("should return passengers on train", () => {
      return Passenger.findPassengersOnTrain(1)
        .then(result => {
          result.should.be.an("array");
        });
    });
  });

  describe("passenger = new Passenger(id)", () => {
    it("should create a new passenger instance", () => {
      passenger = new Passenger(3);
      passenger.id.should.be.equal(3);
    });
  });

  describe("passenger.save()", () => {
    it("should create a new passenger row in database", () => {
      passenger = new Passenger();
      passenger.name = "Hello New";
      return passenger.save()
        .then(result => {
          result.name.should.be.equal("Hello New");
        });
    });
  });

  describe("passenger.update()", () => {
    it("should update passenger to database", () => {
      passenger.name = "Updated Name";
      return passenger.update()
        .then(result => {
          result.should.be.eql([1]);
        });
    });
  });

  describe("passenger.delete()", () => {
    it("should delete passenger from database", () => {
      passenger = new Passenger();
      passenger.name = "to be deleted";
      return passenger.save()
        .then(result => {
          result.should.be.an("object");
          return passenger.del()
        })
        .then(result => {
          result.should.be.equal(1);
        });
    });
  });

});
