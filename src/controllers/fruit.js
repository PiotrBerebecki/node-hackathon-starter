const request = require('request');

exports.getFruit = (req, res) => {
  request(
    'https://jsonplaceholder.typicode.com/photos',
    (err, response, body) => {
      res.render('fruit', {
        activePage: { fruit: true },
        fruit: JSON.parse(body).slice(0, 10),
      });
    }
  );
};
