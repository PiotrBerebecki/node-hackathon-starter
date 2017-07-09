const request = require('request');

exports.getFruit = (req, res) => {
  // res.setHeader('Content-Type', 'text/html');

  request(
    'https://jsonplaceholder.typicode.com/photos',
    (err, response, body) => {
      res.render('fruit', {
        activePage: { fruit: true },
        fruit: JSON.parse(body).slice(0, 10),
      });
      // res.end();
    }
  );

  // res.write('fruit', {
  //   activePage: { fruit: true },
  //   fruit: [],
  // });
};
