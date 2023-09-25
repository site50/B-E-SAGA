const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const db = require('./query_saga')
const port = 3005
const cors = require('cors');

let corsOpltions_saga = { origin: ['http://localhost:3000'] }

app.use(
  bodyParser.urlencoded({
    extended: true,
  })
)
app.use(express.json());
app.use(express.urlencoded({ extended: false }))
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, X-Auth-Token, Authorization");
  res.header({ 'Content-Type': 'application/json', Authorization: 'my-auth-token' })
  res.header("Access-Control-Allow-Credentials:true");
  res.header("Access-Control-Allow-Methods", "GET, PATCH, PUT, POST, DELETE, OPTIONS");
  next();
});

app.get('/data', db.getReact_Saga)
app.get('/data/:id', db.getReact_Saga_ById)
app.post('/data', db.createSelect_Saga)
app.put('/data/:id', db.upSelect_Saga)
app.delete('/data/:id', cors(corsOpltions_saga), db.deleteSelect_Saga)

app.listen(port, () => {
  console.log(`App running on port ${port}.`)
})