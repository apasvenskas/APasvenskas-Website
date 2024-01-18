// const express = require("express")
// const server = express()
// const router = require('./router.js')
// const contactRouter = require('./components/contactsRouter.js')

// server.use(express.json())
// server.use("/website", router)
// server.use("/contacts", contactRouter)

// server.get('/', function (req, res) {
//     res.send('Hello, this is the default page of my server.');
//   });

// module.exports = server
const express = require("express");
const server = express()
const HOST = 'Localhost'
const PORT = 3003
const testData = require('../testData')

server.use(express.json())

server.get('/', function (req, res){
  res.send('Hello, this is the default page of my server.');
})

server.get('/contacts', (req, res) => {
  // post user data
  res.json(testData)
})

server.post('/contacts', (req, res) => {
  // post user data
})
server.listen(PORT, () => console.log(`Server running at ${HOST}:${PORT}`));