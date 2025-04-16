'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class banner_details extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      banner_details.belongsTo(models.banners, { foreignKey: 'banner_id' })
      banner_details.belongsTo(models.products, { foreignKey: 'product_id' })
    }
  }
  banner_details.init({
    product_id: DataTypes.INTEGER,
    banner_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'banner_details',
  });
  return banner_details;
};