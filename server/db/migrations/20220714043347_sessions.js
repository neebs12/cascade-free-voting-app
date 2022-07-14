exports.up = function(knex) {
  return knex.schema.createTable('sessions', function(table) {
    // PK
    table.increments('id')
    // useful for A1 form
    // this is the event_name
    table.string('event_name')
    // this is the winning_ideas_num
    table.int('winning_ideas_num')
  })
}

exports.down = function(knex) {
  return knex.schema.dropTable('sessions')
}
