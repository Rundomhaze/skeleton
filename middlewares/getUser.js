const { User } = require('../db/models');

// Забираем из req.sessions инфу о залогиненом юзере и кладем его в 
// res.locals чтобы в дальнейшим доставать его из Контекста

module.exports = async function getUser(req, res, next) {
  const userId = req.session.user;
  const user = userId && await User.findByPk(userId);
  res.locals.user = user;
  next();
};
