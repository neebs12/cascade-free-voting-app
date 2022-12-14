exports.up = function (knex) {
  return knex.schema.createTable('users', function(table) {
    // PK
    table.increments('id')
    // where name is stored 
    table.string('name') 
  })
}

exports.down = function (knex) {
  return knex.schema.dropTable('users')
}
