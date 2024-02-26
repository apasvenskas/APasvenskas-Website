const express = require("express")
const router = express.Router()
const knex = require('../migrations/dbConfig') 

router.get('/', async (req, res) => {
  try {
    // get the projects data from the database using the knex object
    const projects = await knex('projects').select('*')
    res.status(200).json(projects)
  } catch (error) {
    res.status(500).json({ message: 'There was an error getting the projects.' })
  }
})

router.post('/', async (req, res) => {
  try {
    // get the project data from the request body
    const project = req.body
    // validate the project data
    if (!project.name || !project.description || !project.url) {
      return res.status(400).json({ message: 'Please provide name, description, and url for the project.' })
    }
    // insert the project data into the database using the knex object
    const [newProject] = await knex('projects').insert(project).returning('*')
    res.status(201).json(newProject)
  } catch (error) {
    res.status(500).json({ message: 'There was an error creating the project.' })
  }
})

router.put('/:id', async (req, res) => {
  try {
    // get the project id from the request params
    const { id } = req.params
    // get the project data from the request body
    const project = req.body
    // validate the project data
    if (!project.name || !project.description || !project.url) {
      return res.status(400).json({ message: 'Please provide name, description, and url for the project.' })
    }
    // update the project data in the database using the knex object
    const [updatedProject] = await knex('projects').where({ id }).update(project).returning('*')
    res.status(200).json(updatedProject)
  } catch (error) {
    res.status(500).json({ message: 'There was an error updating the project.' })
  }
})

router.delete('/:id', async (req, res) => {
  try {
    const { id } = req.params
    // delete the project data from the database using the knex object
    const [deletedProject] = await knex('projects').where({ id }).del().returning('*')
    res.status(200).json(deletedProject)
  } catch (error) {
    res.status(500).json({ message: 'There was an error deleting the project.' })
  }
})

module.exports = router 
