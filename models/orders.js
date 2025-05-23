'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class orders extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      orders.belongsTo(models.User, { foreignKey: 'user_id' })
    }
  }
  orders.init({
    user_id: DataTypes.INTEGER,
    status: DataTypes.INTEGER,
    note: DataTypes.TEXT,
    total: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'orders',
  });
  return orders;
};