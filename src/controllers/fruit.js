exports.getFruit = (req, res) => {
  res.render('fruit', { activePage: { fruit: true } });
};
