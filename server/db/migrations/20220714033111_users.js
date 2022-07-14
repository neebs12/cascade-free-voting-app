exports.up = function (knex) {
  return knex.schema.createTable('users', function(table) {
    // PK
    table.increments('id')
    // where name is stored 
    table.string('user') 
    // field for voted status - default false
    table.boolean('voted').notNullable().defaultTo(false)
  })
}

exports.down = function (knex) {
  return knex.schema.dropTable('users')
}
