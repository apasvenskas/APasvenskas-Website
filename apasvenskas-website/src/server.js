const express = require("express")
const server = express()
const router = require('./router.js')
const contactRouter = require('./components/contactsRouter.js')

server.use(express.json())
server.use("/website", router)
server.use("/contacts", contactRouter)

server.get('/', function (req, res) {
    res.send('Hello, this is the default page of my server.');
  });

module.exports = server