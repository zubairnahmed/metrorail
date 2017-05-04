
exports.up = function(knex, Promise) {

  return Promise.all([

    knex.schema.createTable('trains', function(table) {
        table.increments('id').primary();
        table.integer('number');
        table.integer('capacity');
        table.integer('number_of_passengers');
        table.integer('current_station_id')
          .references('id')
          .inTable('stations');
    }),

    knex.schema.createTable('stations', function(table){
        table.increments('id').primary();
        table.string('station_name');
    }),

    knex.raw('alter table "stations" add column "order" serial'),

    knex.schema.createTable('passengers', function(table){
        table.increments('id').primary();
        table.string('name');
        table.integer('destination_id');
        table.boolean('has_ticket');
        table.integer('current_train_id')
          .references('id')
          .inTable('trains');
        table.integer('current_station_id')
          .references('id')
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
