exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('resources').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('resources').insert([
        {name: 'Alcohol', description: 'Used for multiple things!'},
        {name: 'Hamper', description: 'Used to transport dirty clothes.'},
        {name: 'Astros hat', description: 'Go Astros ALCS baby!'},
        {name: 'Blanket', description: 'Used to keep body warm.'},
        {name: 'Washer', description: 'Used to wash clothes.'},
        {name: 'Dryer', description: 'Used to dry clothes.'}
      ]);
    });
};