/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex("contacts").truncate();
  await knex("contacts").insert([
    {
      name: "John Doe",
      email: "johndoe@example.com",
      phone: "(123) 456-7890",
    },
    {
      name: "Bob",
      email: "some@eamil.com",
      phone: "6554527755"
    }
  ]);
};
