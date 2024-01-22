require('dotenv').config()
const { env } = require('node:process')
const express = require('express')
const server = express()

server.use(express.json())

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

server.post('/api/login', (req, res) => {

})


const port = env.PORT || 9000

server.listen(port, () => {
    console.log(`Server listening on port ${port}`)
})
