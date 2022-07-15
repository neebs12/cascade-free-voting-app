/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('votes').del()
    .then(function () {
      // Inserts seed entries
      return knex('votes').insert([
        {id: 1, freq: 4, user_id: 1, idea_id: 1},
        {id: 2, freq: 2, user_id: 2, idea_id: 2},
        {id: 3, freq: 1, user_id: 5, idea_id: 3},
        {id: 4, freq: 2, user_id: 6, idea_id: 3},
        {id: 5, freq: 4, user_id: 6, idea_id: 6},
        {id: 6, freq: 2, user_id: 3, idea_id: 7},
        {id: 7, freq: 4, user_id: 4, idea_id: 2},
      ]);
    });
};
