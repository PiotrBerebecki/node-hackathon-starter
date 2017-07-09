const request = require('request');

exports.getUsers = (req, res) => {
  request(
    'https://jsonplaceholder.typicode.com/users',
    (err, response, body) => {
      res.render('users', {
        activePage: { users: true },
        users: JSON.parse(body),
      });
    }
  );
};
