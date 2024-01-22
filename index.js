require('dotenv').config()
const { env } = require('node:process')
const express = require('express')
const cors = require('cors')

const server = express()

server.use(express.json())
server.use(cors())

// server.use('/', (req, res) => res.send(`<h1>Welcome to the last Module Project before the Sprint Challenge! Good Luck, Jo!!</h1>`))

let users = [
    {

      name: 'Sean Kelly',
      password: generatePass(),
    },
    {

      name: 'Matt Barnes',
      password: generatePass(),
    },
    {

      name: 'Kylie Rhodes',
      password: generatePass(),
    }
  ];

server.get('/api/users', (req, res) => {
    res.status(200).json(users)
})

function generatePass(){
 return Math.floor(Math.random() * 90000 + 10000)
}

server.post('/api/register', (req, res) => {
    //console.log(req.body)

  const user = req.body;
  user.password = generatePass();

  users.push(user);

  res.status(201).json(user);
});

server.post('/api/login', (req, res, next) => {
    try {
        if(!req.body.name || !req.body.password){
            res.status(422).json({ message: `To login, you must type in your NAME and PASSWORD`})
        } else {
            res.status(201).send(`<h2>Welcome ${req.body.name}!!</h2>`)
        }

    } catch(err){
        next(err)
    }
})

server.use((err, req, res, next) => { //eslint-disable-line
    res.status(500).json({ customMessage: 'Warning! SOmething horrible is happening!!',
    message: err.message})
})

const port = env.PORT || 9000

server.listen(port, () => {
    console.log(`Server listening on port ${port}`)
})
