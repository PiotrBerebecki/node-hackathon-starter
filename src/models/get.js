const connect = require('./db-connect');

const get = {};

get.fruit = callback => {
  const sqlQuery = `
    SELECT *
      FROM fruit
    ORDER BY fruit.id DESC;
  `;

  connect.query(sqlQuery, (err, response) => {
    if (err) {
      return callback(new Error('Database error while fetching fruits'));
    }
    callback(null, response.rows);
  });
};

module.exports = get;
