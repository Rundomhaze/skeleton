const React = require('react');

const cardsListRoute = require('express').Router();
const CardsList = require('../../views/CardsList');

const {Card, Photo} = require('../../db/models');

const user = require('../../middlewares/getUser');


cardsListRoute.route('/')
  .get(async (req, res) => {
    
    const allPhotos = await Photo.findAll();
    const onePhoto = allPhotos.filter((el) => el.img_href.includes('1'));
  
    const cards = await Card.findAll({ order: [['id', 'DESC']] });
    res.renderComponent(CardsList, { cards, onePhoto, user })
 

  })



module.exports = cardsListRoute;
