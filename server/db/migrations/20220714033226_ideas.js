exports.up = function(knex) {
  return knex.schema.createTable('ideas', function(table) {
    // PK
    table.increments('id')
    // title of idea (think, headline)
    table.string('title')
    // description of idea 
    table.string('description')
    // FK for user_id
    table.integer('user_id')
    table.foreign('user_id').references('users.id')
  })

};

exports.down = function(knex) {
  // will not be dropping fk contraint first 
  // -- likely not needed if the whole ideas table is
  // -- dropped anyway
  return knex.schema.dropTable('ideas')
};
