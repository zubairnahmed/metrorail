module.exports = {
  development: {
    client: 'postgresql',
    connection: {
      database: 'metrorail_dev'
    },
    seeds: {
      directory: './Database/Seeds'
    }
  }
};
