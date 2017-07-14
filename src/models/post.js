const connect = require('./db-connect');

const post = {};

post.fruit = (name, image_url, callback) => {
  const sqlQuery = `
    INSERT INTO fruit (name, image_url)
    VALUES ($1, $2);
  `;

  connect.query(sqlQuery, [name, image_url], err => {
    if (err) {
      return callback(new Error('Database error while adding new fruit'));
    }
    callback(null, 'New fruit added');
  });
};

module.exports = post;
