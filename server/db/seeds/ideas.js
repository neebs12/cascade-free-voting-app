exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('ideas').del()
    .then(function () {
      // Inserts seed entries
      return knex('ideas').insert([
        {id: 1, title: 'Cascade-free voting', description: 'app to vote without information cascade bias', user_id: 1},
        {id: 2, title: 'Map Learn', description: 'interactive globe with information about each countries', user_id: 2},
        {id: 3, title: '1 Ingredient', description: 'app that provides one ingredient recipes', user_id: 2},
        {id: 4, title: 'Warm fuzzzies', description: 'Nice compliment compiler!', user_id: 3},
        {id: 5, title: 'Space Travel Plan', description: 'Wanna go to the andromeda galaxy? use this app to see what is the best way to get there?', user_id: 3},
        {id: 6, title: 'Carbot Footprint', description: 'See how much youre wasting! Take care of the earth', user_id: 4},
        {id: 7, title: 'Party House', description: 'You know how theres a flu going around? What if we have an app that keeps the party online??', user_id: 5},
      ]);
    });
};
