exports.getUsers = (req, res) => {
  res.render('users', { activePage: { users: true } });
};
