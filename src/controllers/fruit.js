const get = require('./../models/get');

exports.get = (req, res) => {
  get.fruits((dbErr, fruit) => {
    if (dbErr) {
      return res.render('fruit', {
        activePage: { fruit: true },
        fruit: [
          {
            name: 'Database error',
            image_url:
              'https://www.v3.co.uk/w-images/85f9eab1-ad05-46e2-93ef-381218d97f01/0/googlebot404error-370x229.png',
          },
        ],
      });
    }
    // console.log(fruit);
    res.render('fruit', {
      activePage: { fruit: true },
      fruit: fruit,
    });
  });
};
