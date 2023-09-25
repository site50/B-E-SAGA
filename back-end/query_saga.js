const Pool = require('pg').Pool;
const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'react',
  password: 'rita',
  port: 5432,
})

const getReact_Saga = (request, response) => {
  pool.query('SELECT * FROM people ORDER BY id ASC', (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json(results.rows)
  })
}

const getReact_Saga_ById = (request, response) => {
  const id = parseInt(request.params.id)
  pool.query('SELECT * FROM people WHERE id = $1', [id], (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json(results.rows);
  })
}

const createSelect_Saga = (request, response) => {
  const { id, name } = request.body
  pool.query('INSERT INTO people (name) VALUES ($1)',
    [name], (error, results) => {
      if (error) {
        console.log('error--', error)
        throw error
      }
      response.status(201).send(results) 
    })
}

const upSelect_Saga = (request, response) => {
  const id = parseInt(request.params.id)
  const { name } = request.body
  pool.query(
    'UPDATE people SET name = $1 WHERE id = $2',
    [name, id],
    (error, results) => {
      if (error) { throw error }
      response.status(200).send(`User modified with ID: ${id}`);
    }
  )
}

const deleteSelect_Saga= (request, response) => {
  const id = parseInt(request.params.id)
 pool.query('DELETE FROM people WHERE id = $1', [id], (error, results) => {
    if (error) { throw error }
    response.status(201).send(results)
     })
}

module.exports = {
 getReact_Saga,
 getReact_Saga_ById,
 createSelect_Saga,
 upSelect_Saga,
 deleteSelect_Saga
 
}