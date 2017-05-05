# MetroRail

Modeling a city transit system.

This particular city has a simple transit system: just one circular train line with 12 stations and 4 trains.

Base repository for the MetroRail goals:

- [Data Modeling & Database Design](http://jsdev.learnersguild.org/goals/126)
- [Web API Design, Building, and Documentation](http://jsdev.learnersguild.org/goals/127)

## Installation and Setup

Assumption: End user has Postregres intalled:
`$ brew install postgres`

```
$ git clone https://github.com/zubairnahmed/metrorail.git

$ npm install

$ npm run db:create

$ npm run db:migrate

$ npm run db:seed

```

## Usage and Examples

`$ npm start`: start program.

End user, who is a programmer, can now play with the database interface to manage Metrorail_dev database.

### Classes implemented:
-------------------------------------------------------------------------
**Station** 

Create station instances, and interfaces with database: 
`const Station = require('./Classes/station');`

Instantiate a station: new Station([id, [name, [order]]])
```
let station = new Station(1);
```

Get the id of the station instance.
```
station.getId(); // returns an integer.
```

Get the station name of the station instance.
```
station.getStationName(); // returns a string.
```

Get the passengers waiting in a particular station.
```
station.getWaitingPassengers()
  .then(results // returns an array of passengers);
```

Get the passengers with tickets at a particular station.
```
station.getPassengersWithTickets()
  .then(results // returns an array of passengers);
```

Get the previous station in the line.
```
station.getPreviousStation()
  .then(result // returns the previous station object);
```

Get the next station in the line.
```
station.getNextStation()
  .then(result // returns the next station object);
```

Get the next train of the Station class. This is a static method.
```
Station.getNextTrainOf('Downtown')
  .then(result // return the next station object);
```

Perform database operations on the instances of Station.
```
station.save(); // inserts into database
station.update(); // updates the database
station.del(); // deletes from the database
```

Load an instance of the station object, given id, from the database.
```
station.loadInstanceOfStationById([id)
  .then(results // returns an array with station data);
```

---------------------------------------------------------------------------
**Train Class**

Create train instances, and interfaces with database:
`const Train = require('./Classes/train');`

Creates a new instance of Train.
```
let train = new Train([id, [number, [capacity)
```

Get train number.
```
train.getNumber(); // returns an integer.
```

Get train capacity.
```
train.getCapacity(); // returns an integer.
```

Get boarded passengers in train.
```
train.getPassengers()
  .then(result // Returns array of passengers currently in train);
```

Returns whether the train is full or not.
```
train.isFull(); // returns a boolean.
```

Get current station.
```
train.getCurrentStation()
  .then(results // returns station object);
```

Get next station.
```
train.getNextStation()
  .then(results // returns next station object);
```

Move train to next station.
```
train.moveTrain()
  .then(results // returns station the train moved to);
```

Offboard passengers at current station (Whose destination is current station).
```
train.offBoard()
  .then(results // returns array of offboarded passengers);
```

Onboard passengers at current station.
```
train.onBoard()
  .then(results // returns array of onboarded passengers);
```

Load instance of train
```
train.loadInstanceOfTrainById([id)
  .then(results // returns train that was loaded);
  
train.loadInstanceOfTrainByNum([number)
  .then(result // returns train that was loaded);
```

Perform database operations on the instance of train
```
train.save(); // inserts into database
train.update(); // updates the database
train.del(); // deletes from the database
```

-----------------------------------------------------------------------------------
**Passenger Class**

Create passenger instances, and interfaces with database:
`const Passenger = require('./Classes/passenger');`

Create an instance of a passenger:
```
let passenger = new Passenger([id)
```
Get ID of passenger instance.
```
passenger.getId(); // returns an integer.
```

Get name of passenger instance.
```
pasenger.getName(); // retursn a string.
```

Get if the passegner has a ticket.
```
passenger.getTicket(); // returns a boolean.
```

Buy a ticket for the passenger.
```
passenger.buyTicket();
```

Use the ticket for the passenger.
```
passenger.useTicket();
```

Get the train of the passenger.
```
passenger.getCurrentTrain()
  .then(results // returns an array of the train);
```

Get the station of the passenger.
```
passenger.getCurrentStation()
  .then(results // returns an array of the station);
```

Load the instance of a passenger by ID.
```
loadInstanceOfPassengerById([id)
  .then(results // returns an array with the passenger data);
```

Load the instance of a passenger by name.
```
loadInstanceOfPassengerByName([id)
  .then(results // returns an array with the passenger data);
```

Perform database operations on the instance of passenger
```
passenger.save(); // inserts into database
passenger.update(); // updates the database
passenger.del(); // deletes from the database
```

##############################################################
## Specifications

#### Commands

Expose the following commands (and more, if you need) using the `scripts` property of your `package.json`.

- [x] `$ npm run test`: run all tests.
- [ ] `$ npm run repl`: open a REPL session with all your library code loaded.
- [x] `$ npm run db:create`: create the database for the current `NODE_ENV`.
- [x] `$ npm run db:migrate`: run all schema migrations for the database.
- [x] `$ npm run db:seed`: insert seed (sample) data into the database.
- [x] `$ npm run db:drop`: delete the database for the current `NODE_ENV`.
- [x] `$ npm run db:reset`: drop, create, and migrate the database.
- [ ] `$ npm run db:console`: open a console session for running queries against the database.

#### User Stories

Create models with interfaces to satisfy the following user stories, assuming the "user" in this case is a programmer using your data model.

- [x] As a user of the `Train` model, I can...
  - [x] get the number of a particular train.
  - [x] get the capacity for passengers of a particular train.
  - [x] get the passengers of a particular train.
  - [x] determine whether a particular train is full (at capacity) or not.
  - [x] determine the current station of a particular train.
  - [x] determine the next station of a particular train.
  - [x] determine which train is arriving next at a particular station.
  - [x] move a train to its next station.
  - [x] offboard passengers whose destination is a train's current station.
  - [x] onboard passengers of a train at the current station.
  - [x] find a train by its number.
  - [x] create a new train.
  - [x] save new trains to the database.
  - [x] update existing trains in the database.
  - [x] delete a train from the database.
- [x] As a user of the `Train` model, I receive appropriate and descriptive errors.
- [x] As a user of the `Station` model, I can run unit tests that exercise the specs for every public property, instance method, and class method.
- [x] As a user of the `Station` model, I can...
  - [x] get the ID of a particular station.
  - [x] get the location of a particular station.
  - [x] get the passengers waiting for a train at a particular station.
  - [x] get the passengers who have tickets at a particular station.
  - [x] get the previous station on the line for a particular station.
  - [x] get the next station on the line for a particular station.
  - [x] determine which is the next train arriving at a particular station.
  - [x] find a station by its ID.
  - [x] find a station by its location.
  - [x] create a new station.
  - [x] save new stations to the database.
  - [x] update existing stations in the database.
  - [x] delete a station from the database.
- [x] As a user of the `Station` model, I receive appropriate and descriptive errors.
- [x] As a user of the `Station` model, I can run unit tests that exercise the specs for every public property, instance method, and class method.
- [x] As a user of the `Passenger` model, I can...
  - [x] get the ID of a particular passenger.
  - [x] get the name of a particular passenger.
  - [x] get a particular passenger's ticket.
  - [x] set the current station of a particular passenger.
  - [x] buy a ticket for a particular passenger from their current station to another specified station.
  - [x] use a ticket for a particular passenger.
  - [x] determine the current train for a particular passenger.
  - [x] determine the current station for a particular passenger.
  - [x] find a passenger by their ID.
  - [x] find a passenger by their name.
  - [x] find all passengers at a station.
  - [x] find all passengers on a train.
  - [x] create a new passenger.
  - [x] save new passengers to the database.
  - [x] update existing passengers in the database.
  - [x] delete a passenger from the database.
- [x] As a user of the `Passenger` model, I receive appropriate and descriptive errors.
- [x] As a user of the `Station` model, I can run unit tests that exercise the specs for every public property, instance method, and class method.
- [x] Repository includes a README file with basic installation and setup instructions.
- [x] All dependencies are properly declared in `package.json`.
- [x] All major features are added via pull requests with a clear description and concise commit messages.
- [x] Code uses a linter and there are no linting errors.
- [x] Variables, functions, files, etc. have appropriate and meaningful names.
- [x] Functions are small and serve a single purpose.
- [x] The artifact produced is properly licensed, preferably with the [MIT license][mit-license].

### Stretch

Pick a _different_ database from the one you used (some ideas: CouchDB, Mongo, Neo4J, MariaDB) and write an alternate implementation.

- [ ] Equivalent commands exist for the alternate database.
- [ ] A database module exists with configuration options to specify which database to use.
- [ ] All tests pass when using the alternate database.
