'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Announcement extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Announcement.belongsTo(models.Post);
      Announcement.belongsTo(models.User);
    }
  };
  Announcement.init({
    PostId: DataTypes.INTEGER,
    UserId: DataTypes.STRING,
    contentAnnoun: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'Announcement',
  });
  return Announcement;
};