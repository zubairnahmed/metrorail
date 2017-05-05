# MetroRail

Modeling a city transit system.

This particular city has a simple transit system: just one circular train line with 12 stations and 4 trains.

Base repository for the MetroRail goals:

- [Data Modeling & Database Design](http://jsdev.learnersguild.org/goals/126)
- [Web API Design, Building, and Documentation](http://jsdev.learnersguild.org/goals/127)

## Installation and Setup

_Fill this out_

## Usage and Examples

_...and this_

## Specifications

#### Commands

Expose the following commands (and more, if you need) using the `scripts` property of your `package.json`.

- [ ] `$ npm run test`: run all tests.
- [ ] `$ npm run repl`: open a REPL session with all your library code loaded.
- [ ] `$ npm run db:create`: create the database for the current `NODE_ENV`.
- [ ] `$ npm run db:migrate`: run all schema migrations for the database.
- [ ] `$ npm run db:seed`: insert seed (sample) data into the database.
- [ ] `$ npm run db:drop`: delete the database for the current `NODE_ENV`.
- [ ] `$ npm run db:reset`: drop, create, and migrate the database.
- [ ] `$ npm run db:console`: open a console session for running queries against the database.

#### User Stories

Create models with interfaces to satisfy the following user stories, assuming the "user" in this case is a programmer using your data model.

- [ ] As a user of the `Train` model, I can...
  - [ ] get the number of a particular train.
  - [ ] get the capacity for passengers of a particular train.
  - [ ] get the passengers of a particular train.
  - [ ] determine whether a particular train is full (at capacity) or not.
  - [ ] determine the current station of a particular train.
  - [ ] determine the next station of a particular train.
  - [ ] determine which train is arriving next at a particular station.
  - [ ] move a train to its next station.
  - [ ] offboard passengers whose destination is a train's current station.
  - [ ] onboard passengers of a train at the current station.
  - [ ] find a train by its number.
  - [ ] create a new train.
  - [ ] save new trains to the database.
  - [ ] update existing trains in the database.
  - [ ] delete a train from the database.
- [ ] As a user of the `Train` model, I receive appropriate and descriptive errors.
- [ ] As a user of the `Station` model, I can run unit tests that exercise the specs for every public property, instance method, and class method.
- [ ] As a user of the `Station` model, I can...
  - [ ] get the ID of a particular station.
  - [ ] get the location of a particular station.
  - [ ] get the passengers waiting for a train at a particular station.
  - [ ] get the passengers who have tickets at a particular station.
  - [ ] get the previous station on the line for a particular station.
  - [ ] get the next station on the line for a particular station.
  - [ ] determine which is the next train arriving at a particular station.
  - [ ] find a station by its ID.
  - [ ] find a station by its location.
  - [ ] create a new station.
  - [ ] save new stations to the database.
  - [ ] update existing stations in the database.
  - [ ] delete a station from the database.
- [ ] As a user of the `Station` model, I receive appropriate and descriptive errors.
- [ ] As a user of the `Station` model, I can run unit tests that exercise the specs for every public property, instance method, and class method.
- [ ] As a user of the `Passenger` model, I can...
  - [ ] get the ID of a particular passenger.
  - [ ] get the name of a particular passenger.
  - [ ] get a particular passenger's ticket.
  - [ ] set the current station of a particular passenger.
  - [ ] buy a ticket for a particular passenger from their current station to another specified station.
  - [ ] use a ticket for a particular passenger.
  - [ ] determine the current train for a particular passenger.
  - [ ] determine the current station for a particular passenger.
  - [ ] find a passenger by their ID.
  - [ ] find a passenger by their name.
  - [ ] find all passengers at a station.
  - [ ] find all passengers on a train.
  - [ ] create a new passenger.
  - [ ] save new passengers to the database.
  - [ ] update existing passengers in the database.
  - [ ] delete a passenger from the database.
- [ ] As a user of the `Passenger` model, I receive appropriate and descriptive errors.
- [ ] As a user of the `Station` model, I can run unit tests that exercise the specs for every public property, instance method, and class method.
- [ ] Repository includes a README file with basic installation and setup instructions.
- [ ] All dependencies are properly declared in `package.json`.
- [ ] All major features are added via pull requests with a clear description and concise commit messages.
- [ ] Code uses a linter and there are no linting errors.
- [ ] Variables, functions, files, etc. have appropriate and meaningful names.
- [ ] Functions are small and serve a single purpose.
- [ ] The artifact produced is properly licensed, preferably with the [MIT license][mit-license].

### Stretch

Pick a _different_ database from the one you used (some ideas: CouchDB, Mongo, Neo4J, MariaDB) and write an alternate implementation.

- [ ] Equivalent commands exist for the alternate database.
- [ ] A database module exists with configuration options to specify which database to use.
- [ ] All tests pass when using the alternate database.
