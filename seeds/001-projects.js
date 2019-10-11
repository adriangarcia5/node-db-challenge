exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('projects').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('projects').insert([
        {name: 'Take a huge nap', description: 'How to take a dope nap.', completed: true},
        {name: 'Clean your room', description: 'How do I clean my room lol?', completed: false},
        {name: 'Celebrate your birthday', description: 'Wednesday birthdays suck lol.', completed: false}
      ]);
    });
};