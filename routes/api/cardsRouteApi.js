const cardsRouteApi = require('express').Router();

const { Card, Photo } = require('../../db/models');
const EditCard = require('../../views/EditCard');
const Cabinet = require('../../views/Cabinet');

cardsRouteApi.route('/delete/:id') // Удаление карточек
  .delete(async(req, res) => {
    try {
      await Card.destroy({
        where: {id: req.params.id}
      })
      res.json({status: 'ok'});
    } catch {
      res.json({
        status: 'DB not answer'
      })
    };
  });

  cardsRouteApi.route('/edit/:id')  // Изменение карточек
    .get(async (req, res) => {
      const card = await Card.findOne({ where: { id: req.params.id } });
      res.renderComponent(EditCard, { card });
    });

  cardsRouteApi.route('/edit/update/:id')  // Изменение карточек
    .post(async (req, res) => {
      const card = await Card.findOne({where: {id: req.params.id} });
      const {cardName, cardDesc, cardPrice} = req.body;
      card.cardName = cardName;
      card.cardDesc = cardDesc;
      card.cardPrice = cardPrice;
      card.save();
      res.redirect('/cardsList')
    });

  cardsRouteApi.route('/add')  // Добавление карточек
    .get((req, res) => {
        res.renderComponent(Cabinet, {});
    });

  cardsRouteApi.route('/add/save') // Добавление карточек
    .post(async (req, res) => {
      const {cardName, cardDesc, cardPrice, img_href} = req.body;
      const {user: user} = req.session;
      // const allCards = await Card.findAll({order:[['id', 'DESC']], limit: 1});
      // const idLastCard = allCards.id
      // console.log(idLastCard);
      
      

      const newCard = await Card.create({
        cardName: cardName,
        cardDesc: cardDesc,
        cardPrice: cardPrice,
        idUser: user,
      });

      const newPhotoFromNewCard = await Photo.create({
        img_href: img_href,
        idCard: newCard.id, 
      })
      
      res.redirect('/cardsList')    
    })  






    



module.exports = cardsRouteApi;
