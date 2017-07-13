const get = require('./../models/get');

exports.get = (req, res) => {
  get.fruits((dbErr, fruit) => {
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
