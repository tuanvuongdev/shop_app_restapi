'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class banners extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      banners.hasMany(models.banner_details, { foreignKey: 'banner_id' })
    }
  }
  banners.init({
    name: DataTypes.STRING,
    image: DataTypes.TEXT,
    status: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'banners',
    underscored: true
  });
  return banners;
};