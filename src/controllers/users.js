const request = require('request');

exports.getUsers = (req, res) => {
  request(
    'https://jsonplaceholder.typicode.com/users',
    (err, response, body) => {
      console.log('make a call to api');
      res.render('users', {
        activePage: { users: true },
        users: JSON.parse(body),
      });
    }
  );
};
