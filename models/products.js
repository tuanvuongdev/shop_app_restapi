'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class products extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      products.belongsTo(models.categories, { foreignKey: 'category_id' })
      products.belongsTo(models.brands, { foreignKey: 'brand_id' })
      products.hasMany(models.order_details, { foreignKey: 'product_id' })
      products.hasMany(models.banner_details, { foreignKey: 'product_id' })
      products.hasMany(models.feedbacks, { foreignKey: 'product_id' })
      products.hasMany(models.news_details, { foreignKey: 'product_id' })
    }
  }
  products.init({
    name: DataTypes.STRING,
    image: DataTypes.TEXT,
    price: DataTypes.INTEGER,
    old_price: DataTypes.INTEGER,
    description: DataTypes.TEXT,
    specification: DataTypes.TEXT,
    buy_turns: DataTypes.INTEGER,
    quantity: DataTypes.INTEGER,
    category_id: DataTypes.INTEGER,
    brand_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'products',
  });
  return products;
};