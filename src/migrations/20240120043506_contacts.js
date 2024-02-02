/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = async knex => {
    await knex.schema.createTable('contacts', tbl => {
        tbl.increments();
        tbl.string('name', 70).notNullable()
        tbl.string('email', 100)
        tbl.bigInteger('phone')
    })
} 

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = async knex => {
  await knex.schema.dropTableIfExists('contacts'); 
};
