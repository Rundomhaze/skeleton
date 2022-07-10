const bcrypt = require('bcrypt');

const authRouteApi = require('express').Router();
const { User } = require('../../db/models');

authRouteApi.route('/auth/reg')
  .post(async (req, res) => {
    try {
      const {email, password} = req.body;
      const user = await User.findOne({
        where: {
         userEmail: email 
        },
      });
      if (user) {
        res.json({status: 'NOT OK', errorMessage: 'User already registred'})
        return;
      }
      const hash = await bcrypt.hash(password, 5);
      const newUser = await User.create({
        userName: req.body.name,
        userEmail: req.body.email,
        userPassword: hash,
      }, {
        returning: true,
        plain: true,
      });
      res.write('<script>alert("User registred!")</script>')
      res.end('<script>window.location.href="/auth/login"</script>')
    } catch(error) {}    
  });


module.exports = authRouteApi;
