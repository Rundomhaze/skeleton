const cardsRouteApi = require('express').Router();

const { Card } = require('../../db/models');

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

  // cardsRouteApi.route('/')

module.exports = cardsRouteApi;
