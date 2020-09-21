const db = require('../config/db')
const { age, date } = require('../lib/utils')

module.exports = {
  all (callback) {
    db.query (`SELECT * FROM instructors`, function (err, results) {
      if (err) return res.send ('Erros Document')

      callback(results.rows)
    })
  },
  create (data, callback) {
    const query = `
      INSERT INTO instructors (
        name,
        avatar_url,
        gender,
        services,
        birth,
        created_at
      ) VALUES ($1, $2, $3, $4, $5, $6)
      RETURNING id
    `
    const values = [
      data.name,
      data.avatar_url,
      data.gender,
      data.services,
      date(data.birth).iso,
      date(Date.now()).iso
    ]

    db.query(query, values, function (err, results) {
      if (err) return res.send("Error Databse")
      
      callback(results.rows[0].id)
    })
  },
  find (id, callback) {
    db.query (`SELECT * FROM instructors WHERE id = $1`,
      [id], function (err, results) {
        if (err) return res.send('Erro in Document')
        callback (results.rows[0])
      })
  },
  update (date, callback) {
    const query = `
    UPDATE isntructors SET
      avatar_url=($1),
      name=($2),
      birth=($3),
      gender=($4),
      services=($5)
    WHERE id = $6
    `
    const values = [
      
    ]
  }
}