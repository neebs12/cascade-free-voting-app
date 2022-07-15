exports.up = function(knex) {
  return knex.schema.createTable('votes', function(table) {
    // PK
    table.increments('id')
    // frequency
    table.integer('freq').notNullable().defaultTo(1)
    // FK 1
    table.integer('user_id')
    table.foreign('user_id')
      .references('users.id')
      .onDelete('CASCADE')

    // FK 2
    table.integer('idea_id')
    table.foreign('idea_id')
      .references('idea.id')
      .onDelete('CASCADE')
  })
}

exports.down = function(knex) {
  return knex.schema.dropTable('votes')
}
