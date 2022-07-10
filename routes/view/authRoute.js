const authRoute = require('express').Router();
const bcrypt = require('bcrypt');

const Reg = require('../../views/Reg');
const Log = require('../../views/Log');
const { User } = require('../../db/models');


authRoute.route('/reg')
  .get((req, res) => {
    res.renderComponent(Reg)
  });


module.exports = authRoute;
