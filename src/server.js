const express = require("express");
const server = express()
const HOST = 'Localhost'
const PORT = 3001
const db = require('./dbConfigs');
const cors = require('cors')
const helmet = require('helmet')

server.use(cors())
server.use(helmet())
server.use(express.json())

// the iniatial setup test. 
server.get('/', function (req, res){
  res.send('Hello, this is the default page of my server.');
})
// for the backend server run the following command: node src/server.js
server.get('/contacts', async (req, res) => {
  // get user data
  try {
    const contacts = await db('contacts')
    res.json(contacts)
  } catch(err){
      console.log(err)
  }
})

server.post('/contacts', async (req, res) => {
  // post user data
  const contacts = req.body
  console.log(contacts)
  if (!contacts){
    return req.statusCode(400).json({ message: 'Must complete all three fields name, email, and phone'})
  }
  try {
    await db('contacts').insert(contacts)
    res.json({contact: 'Contact Succesfully Noted'})
  } catch(err) {
      console.log(err);
  }
})
server.listen(PORT, () => console.log(`Server running at ${HOST}:${PORT}`));