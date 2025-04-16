'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class news_details extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      news_details.belongsTo(models.news, { foreignKey: 'news_id' })
      news_details.belongsTo(models.products, { foreignKey: 'product_id' })
    }
  }
  news_details.init({
    product_id: DataTypes.INTEGER,
    news_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'news_details',
  });
  return news_details;
};