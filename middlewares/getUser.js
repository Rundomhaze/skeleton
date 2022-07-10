const { User } = require('../db/models');

module.exports = async function getUser(req, res, next) {
  const userID = req.session.user;
  const user = userID && await User.findByPk(userID);
  res.locals.user = user;
  next();
};
