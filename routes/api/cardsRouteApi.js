const cardsRouteApi = require('express').Router();

const { Card } = require('../../db/models');
const EditCard = require('../../views/EditCard')

cardsRouteApi.route('/delete/:id')
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

  cardsRouteApi.route('/edit/:id')
    .get(async (req, res) => {
      const card = await Card.findOne({ where: { id: req.params.id } });
      res.renderComponent(EditCard, { card });
    });

  cardsRouteApi.route('/edit/update/:id')
    .post(async (req, res) => {
      const card = await Card.findOne({where: {id: req.params.id} });
      const {cardName, cardDesc} = req.body;
      console.log(cardName, cardDesc, '.>>>>>>>>>>>>>>>>>>>>>>>>>>>>>');
      card.cardName = cardName;
      card.cardDesc = cardDesc;
      card.save();
      res.redirect('/cardsList')
    })
    



module.exports = cardsRouteApi;
