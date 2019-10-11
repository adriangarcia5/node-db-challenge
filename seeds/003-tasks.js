exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('tasks').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('tasks').insert([
        {description: 'Take a nap!', notes: 'that was great', completed: true},
        {description: 'Get mentally prepared for the weekend.', notes: 'Yay friends are visiting!', completed: true},
        {description: 'Get out of bed.', notes: 'still wanna nap lol', completed: false},
        {description: 'Buy Alcohol for the weekend', notes: 'its my birthday I aint paying lol.', completed: false},
        {description: 'Grab the hamper and take it to the laundry room.', notes: 'nahh ill do that later', completed: false},
        {description: 'Turn on the washer.', notes: 'cant without having the dirty clothes inside!', completed: false},
        {description: 'Pick up all clothes and trash.', notes: 'the least you could do right?', completed: true},
        {description: 'Take another nap later.', notes: 'excited for this', completed: false},
        {description: 'Stay alive the whole weekend.', notes: 'we shall see on Monday...yikes!', completed: false}
      ]);
    });
};