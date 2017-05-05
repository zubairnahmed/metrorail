const chai = require('chai');
const expect = chai.expect;
const should = chai.should();
const chaiAsPromised = require('chai-as-promised');
const Train = require('../Classes/train');
const passengerQueries = require('../Database/Queries/passengers.queries');
const trainQueries = require('../Database/Queries/trains.queries');
const genericQueries = require('../Database/Queries/generic.queries');
const stationQueries = require('../Database/Queries/stations.queries');

chai.use(chaiAsPromised);
/*
Our tests are designed to work with the seed data we provide.
Additional tests may need to be added by the user.
*/

describe('Train class tests::: ', () => {

  beforeEach(() => {
    train = new Train(1, 1, 55);
  })

  it('Train is defined as a class function', () => {
    expect(Train).to.be.a('function');
  })

  it('get the id of a train', () => {
    expect(train.id).to.equal(1);
  })

  it('get the number of a train', () => {
    expect(train.number).to.equal(1);
  })

  it('get the id of a train', () => {
    expect(train.capacity).to.equal(55);
  })

  it('retrieves passengers on a train', () => {
    return train.getPassengers(train.id)
      .then(data => {
        expect(data).to.eql([]);
      })
  })

  it('tests if new train is empty', () => {
    expect(train.isFull()).to.be.false;
  })

  it('retrieves the station the train is on', () => {
    return train.getCurrentStation()
      .then(data => {
        expect(data).to.eql({ id: 1, station_name: 'Downtown', order: 1 });
      })
  })


  it('retrieves the next station the train is going to', () => {
    return train.getNextStation()
      .then(data => {
        expect(data).to.eql({ id: 2, station_name: 'Elm Street', order: 2 });
      })
  })

  it('tests if train moved one station', () => {
    return train.moveTrain()
      .then(data => {
        expect(train.currentStationId).to.equal(2);
      })
  })

  it('tests if a passenger onboards', () => {
    return train.onBoard()
      .then(data => {
        expect(data).to.eql([]);
      })
  })

  it('tests if a passenger offboards', () => {
    return train.offBoard()
      .then(data => {
        expect(data).to.eql([]);
      })
  })

  it('saves the current train instance', () => {
    train.id = 5;
    return train.save()
      .then(data => {
        expect(data).to.eql({id: 5, number: 1, numberOfPassengers: undefined, capacity: 55, currentStationId: 1 });
      })
  })

  it('updates the current train instance', () => {
    train.id = 5;
    train.capacity = 70;
    return train.update()
      .then(data => {
        expect(data).to.eql([5]);
      })
  })

  it('deletes the current train instance', () => {
    train.id = 5;
    return train.del()
      .then(data => {
        expect(data).to.equal(1);
      })
  })

  it('loads train by id', () => {
    return train.loadInstanceOfTrainById()
      .then(data => {
        expect(data).to.eql({id: 1, number: 1, numberOfPassengers: 0, capacity: 55, currentStationId: null })
      })
  })

  it('loads train by number', () => {
    return train.loadInstanceOfTrainByNum()
      .then(data => {
        expect(data).to.eql({id: 1, number: 1, numberOfPassengers: 0, capacity: 55, currentStationId: null })
      })
  })

})
