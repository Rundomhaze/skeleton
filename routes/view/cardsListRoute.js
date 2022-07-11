const React = require('react');

const cardsListRoute = require('express').Router();
const CardsList = require('../../views/CardsList');

const {Card, User} = require('../../db/models');

cardsListRoute.route('/')
  .get(async (req, res) => {
    try {
    const cards = await Card.findAll({ order: [['id', 'DESC']] });
    res.renderComponent(CardsList, { cards })
  } catch {}

  })



module.exports = cardsListRoute;
