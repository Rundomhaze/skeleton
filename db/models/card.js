'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Card extends Model {
    
    static associate({User, Photo}) {
     Card.belongsTo(User, {foreignKey: 'idUser'}),
     Card.hasMany(Photo, {foreignKey: 'idCard'})
    }
  }
  Card.init({
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    cardName: {
      allowNull: false,
      type: DataTypes.TEXT
    },
    cardDesc: {
      allowNull: false,
      type: DataTypes.TEXT
    },
    cardPrice: {
      allowNull: false,
      type: DataTypes.INTEGER
    },
    idUser: {
      type: DataTypes.INTEGER,
      references: {
        model: 'Users',
        key: 'id',
      }
    },
    createdAt: {
      allowNull: false,
      type: DataTypes.DATE
    },
    updatedAt: {
      allowNull: false,
      type: DataTypes.DATE
    }
  }, {
    sequelize,
    modelName: 'Card',
    tableName: 'Cards'
  });
  return Card;
};
