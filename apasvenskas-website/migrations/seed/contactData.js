exports.seed = function(knex) {
    // Deletes ALL existing entries
    return knex('contacts').del()
      .then(function () {
        // Inserts seed entries
        return knex('contacts').insert([
          {id: 1, name: 'Alice', email: 'alice@example.com', phone: '123-456-7890'},
          {id: 2, name: 'Bob', email: 'bob@example.com', phone: '234-567-8901'},
          {id: 3, name: 'Charlie', email: 'charlie@example.com', phone: '345-678-9012'}
        ]);
      });
  };