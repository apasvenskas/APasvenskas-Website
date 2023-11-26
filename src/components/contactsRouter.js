// contactsRouter.js
const express = require("express")
const router = express.Router()
const knex = require('../../migrations/dbConfig') // import the knex object

// create a post endpoint for creating a new contact
router.post('/contacts', async (req, res) => {
  try {
    // get the contact data from the request body
    const contact = req.body
    // validate the contact data
    if (!contact.name || !contact.email || !contact.phone) {
      return res.status(400).json({ message: 'Please provide name, email, and phone for the contact.' })
    }
    // insert the contact data into the database using the knex object
    // use the returning method to get the inserted data back
    const [newContact] = await knex('contacts').insert(contact).returning('*')
    // return the created contact with the id and the status code 201
    res.status(201).json(newContact)
  } catch (error) {
    // handle any errors
    res.status(500).json({ message: 'There was an error creating the contact.' })
  }
})

module.exports = router
