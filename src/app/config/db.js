const { pool } = require('pg')

module.exports = new Pool ({
  user: "postgres",
  password: "postgre",
  host: "localhost",
  port: "5432",
  database: "gymmanager"
})