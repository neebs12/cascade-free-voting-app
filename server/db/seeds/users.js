exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        // note: voted field is defaulted to `false`
        {id: 1, name: 'Jason'},
        {id: 2, name: 'Master Chief 117'},
        {id: 3, name: 'gkford'},
        {id: 4, name: 'j4r3d'},
        {id: 5, name: 'hello there ---'},
        {id: 6, name: 'super fly123'},
        {id: 7, name: 'never-vote person'}
      ]);
    });
};
