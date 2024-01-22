require('dotenv').config()
const { env } = require('node:process')
const express = require('express')
const server = express()

server.use(express.json())

let users = [
    {
      id: 1,
      name: 'Sean Kelly',
      age: 29,
    },
    {
      id: 2,
      name: 'Matt Barnes',
      age: 42,
    },
    {
      id: 3,
      name: 'Kylie Rhodes',
      age: 21,
    }
  ];

server.get('/api/users', (req, res) => {
    res.status(200).json(users)
})


const port = env.PORT || 9000

server.listen(port, () => {
    console.log(`Server listening on port ${port}`)
})
