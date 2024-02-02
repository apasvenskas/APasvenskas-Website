// Update with your config settings.

/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
module.exports = {

  development: {
    client: 'sqlite3',
    connection: {
      filename: './src/contacts.sqlite3'
    },
    migrations: {
      directory: './src/migrations'
    },
    seeds: {
      directory: './src/seed'
    }
  },
};
