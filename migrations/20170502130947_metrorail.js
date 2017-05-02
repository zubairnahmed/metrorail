
exports.up = function(knex, Promise) {

  return Promise.all([

    knex.schema.createTable('trains', function(table) {
        table.increments('id').primary();
        table.integer('num');
        table.integer('capacity');
        table.integer('number_of_passengers');
        table.boolean('full');
        table.integer('current_station_id')
          .references('station_id')
          .inTable('stations');
    }),

    knex.schema.createTable('stations', function(table){
        table.increments('id').primary();
        table.string('next_train');
        table.string('station_name');
        table.string('next_station');
        table.string('previous_station');
    }),

    knex.schema.createTable('passengers', function(table){
        table.increments('id').primary();
        table.string('name');
        table.string('destination');
        table.boolean('has_ticket');
        table.integer('current_train_id')
          .references('train_id')
          .inTable('trains');
        table.integer('current_station_id')
          .references('station_id')
          .inTable('stations');
    })
  ])

};

exports.down = function(knex, Promise) {

  return Promise.all([

    knex.schema.dropTable('trains'),
    knex.schema.dropTable('stations'),
    knex.schema.dropTable('passengers')

  ])
};
