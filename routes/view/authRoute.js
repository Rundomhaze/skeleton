const authRoute = require('express').Router();
const bcrypt = require('bcrypt');

const Reg = require('../../views/Reg');
const Log = require('../../views/Log');
const {
  User
} = require('../../db/models');


authRoute.route('/reg')
  .get((req, res) => {
    res.renderComponent(Reg)
  });

authRoute.route('/login')
  .get((req, res) => {
    res.renderComponent(Log)
  })
  .post(async (req, res) => {
    try {
      const {
        email,
        password
      } = req.body;
      const user = await User.findOne({
        where: {
          userEmail: email,
        },
      });
      if (!user) {
        res.json({
          status: 'notOk',
          errorMessage: 'Такого пользователя не существует'
        });
        return;
      }
      const authOk = await bcrypt.compare(password, user.userPassword);
      if (!authOk) {
        res.json({
          status: 'notok',
          errorMessage: 'Неверный пароль!'
        });
        return;
      }
      req.session.user = user.id;
      res.redirect('/')
    } catch {}
  })

authRoute.route('/logout')
  .get((req, res) => {
    req.session.destroy();
    res.clearCookie('user_sid');
    res.redirect('/');
  });

module.exports = authRoute;
