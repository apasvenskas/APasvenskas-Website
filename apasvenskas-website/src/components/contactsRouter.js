const express = require("express")
const router = express.Router()
const db = require('../../migrations/dbConfig')

router.post('/', async (req, res) => {
  try {
    // get the contact data from the request body
    const contact = req.body
    // validate the contact data
    if (!contact.name || !contact.email || !contact.phone) {
      return res.status(400).json({ message: 'Please provide name, email, and phone for the contact.' })
    }
    const [newContact] = await db('contacts').insert(contact).returning('*')
    res.status(201).json(newContact)
  } catch (error) {
    res.status(500).json({ message: 'There was an error creating the contact.' })
  }
})

module.exports = router
