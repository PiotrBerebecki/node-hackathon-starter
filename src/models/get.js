const connect = require('./db-connect');

const get = {};

get.fruits = callback => {
  const sqlQuery = `
    SELECT *
      FROM fruit
    ORDER BY fruit.id DESC;
  `;

  connect.query(sqlQuery, (err, response) => {
    if (err) {
      return callback(err);
    }
    callback(null, response.rows);
  });
};

module.exports = get;
