'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    
    static associate({ Card }) {
      User.hasMany(Card, {foreignKey: 'idUser'});
    }
  }
  User.init({
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    userName: {
      allowNull: false,
      type: DataTypes.TEXT
    },
    userEmail: {
      allowNull: false,
      type: DataTypes.TEXT
    },
    userPassword: {
      allowNull: false,
      type: DataTypes.TEXT
    },
    isAdmin: {
      allowNull: false,
      defaultValue: false,
      type: DataTypes.BOOLEAN
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
    modelName: 'User',
    tableName: 'Users'
  });
  return User;
};
