exports.getHome = (req, res) => {
  res.render('home', { activePage: { home: true } });
};
