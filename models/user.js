'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      User.hasMany(models.Post);
      User.hasMany(models.ChatUser);
      User.hasMany(models.pInteraction);
      User.hasMany(models.pComment);
      User.hasMany(models.Announcement);
      User.hasMany(models.ReportedPost);
    }
  };
  User.init({
    id: {
      type: DataTypes.STRING,
      primaryKey: true
    },
    password: DataTypes.STRING,
    type: DataTypes.STRING,
    fname: DataTypes.STRING,
    lname: DataTypes.STRING,
    avt: DataTypes.STRING,
    bg: DataTypes.STRING,
    email: DataTypes.STRING,
    address: DataTypes.STRING,
    avt: DataTypes.STRING,
    bg: DataTypes.STRING,
    pNum: DataTypes.STRING,
    bDay: DataTypes.INTEGER,
    bMonth: DataTypes.INTEGER,
    bYear: DataTypes.INTEGER,
    gender: DataTypes.STRING,
    nation: DataTypes.STRING,
    bio: DataTypes.TEXT,
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};