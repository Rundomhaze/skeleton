'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Photo extends Model {   
    static associate({Card}) {
      Photo.belongsTo(Card, {foreignKey: 'idCard', onDelete: 'cascade'})
    }
  }
  Photo.init({
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    idCard: {
      allowNull: false,
      type: DataTypes.INTEGER,
      references: {
        model: 'Cards',
        key: 'id'
      }
    },
    img_href: {
      allowNull: false,
      type: DataTypes.TEXT
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
    modelName: 'Photo',
    tableName: 'Photos'
  });
  return Photo;
};
