
const express = require("express")
const router = express.Router()
const knex = require('../db/knex.js') // import the knex object

// create a get endpoint for getting all the projects
router.get('/', async (req, res) => {
  try {
    // get the projects data from the database using the knex object
    const projects = await knex('projects').select('*')
    // return the projects data with the status code 200
    res.status(200).json(projects)
  } catch (error) {
    // handle any errors
    res.status(500).json({ message: 'There was an error getting the projects.' })
  }
})

// create a post endpoint for creating a new project
router.post('/', async (req, res) => {
  try {
    // get the project data from the request body
    const project = req.body
    // validate the project data
    if (!project.name || !project.description || !project.url) {
      return res.status(400).json({ message: 'Please provide name, description, and url for the project.' })
    }
    // insert the project data into the database using the knex object
    // use the returning method to get the inserted data back
    const [newProject] = await knex('projects').insert(project).returning('*')
    // return the created project with the id and the status code 201
    res.status(201).json(newProject)
  } catch (error) {
    // handle any errors
    res.status(500).json({ message: 'There was an error creating the project.' })
  }
})

// create a put endpoint for updating an existing project
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
    // use the returning method to get the updated data back
    const [updatedProject] = await knex('projects').where({ id }).update(project).returning('*')
    // return the updated project with the status code 200
    res.status(200).json(updatedProject)
  } catch (error) {
    // handle any errors
    res.status(500).json({ message: 'There was an error updating the project.' })
  }
})

// create a delete endpoint for deleting an existing project
router.delete('/:id', async (req, res) => {
  try {
    // get the project id from the request params
    const { id } = req.params
    // delete the project data from the database using the knex object
    // use the returning method to get the deleted data back
    const [deletedProject] = await knex('projects').where({ id }).del().returning('*')
    // return the deleted project with the status code 200
    res.status(200).json(deletedProject)
  } catch (error) {
    // handle any errors
    res.status(500).json({ message: 'There was an error deleting the project.' })
  }
})

module.exports = router // export the router module
