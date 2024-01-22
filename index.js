require('dotenv').config()
const { env } = require('node:process')
const express = require('express')
const server = express()

server.use(express.json())

server.get('/api/users', (req, res) => {
    
})


const port = env.PORT || 9000

server.listen(port, () => {
    console.log(`Server listening on port ${port}`)
})
