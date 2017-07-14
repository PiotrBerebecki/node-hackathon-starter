const request = require('request');

const get = require('./../models/get');
const post = require('./../models/post');

exports.get = (req, res) => {
  get.fruit((dbErr, fruit) => {
    if (dbErr) {
      return res.render('fruit', {
        activePage: { fruit: true },
        errorMessage: 'Database error',
      });
    }
    res.render('fruit', {
      activePage: { fruit: true },
      fruit: fruit,
    });
  });
};

exports.post = (req, res) => {
  const { name, image_url } = req.body;

  const magic = {
    jpg: 'ffd8ffe0',
    png: '89504e47',
    gif: '47494638',
  };

  const options = {
    method: 'GET',
    url: image_url,
    encoding: null, // keeps the body as buffer
  };

  request(options, (err, response, body) => {
    if (!err && response.statusCode == 200) {
      const magigNumberInBody = body.toString('hex', 0, 4);
      if (
        magigNumberInBody == magic.jpg ||
        magigNumberInBody == magic.png ||
        magigNumberInBody == magic.gif
      ) {
        console.log('url to image');
        post.fruit(name.toLowerCase(), image_url, (dbErr, msg) => {
          if (dbErr) {
            console.log('db error');
            res.redirect('/fruit');
          }
          res.redirect('/fruit');
        });
      } else {
        console.log('url not to image');
        res.redirect('/fruit');
      }
    } else {
      console.log('cannot check image');
      res.redirect('/fruit');
    }
  });
};
