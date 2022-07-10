const homeRoute = require('express').Router();
const Home = require('../../views/Home');

homeRoute.route('/')
  .get(async(req, res) => {
    res.renderComponent(Home, {});
  });

module.exports = homeRoute;
