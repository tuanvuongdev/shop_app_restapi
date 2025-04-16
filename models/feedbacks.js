'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class feedbacks extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      feedbacks.belongsTo(models.User, { foreignKey: 'user_id' })
      feedbacks.belongsTo(models.products, { foreignKey: 'product_id' })
    }
  }
  feedbacks.init({
    product_id: DataTypes.INTEGER,
    user_id: DataTypes.INTEGER,
    star: DataTypes.INTEGER,
    content: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'feedbacks',
  });
  return feedbacks;
};