'use strict';
const {
  Model
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Product extends Model {
    static associate(models) {
      Product.belongsTo(models.Category, {
        foreignKey: 'categoryId',
      });
    }
  }

  Product.init(
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
        primaryKey: true,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      quantity: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      inStock: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
      },
      productImage: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      price: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      expiryDate: {
        type: DataTypes.DATE,
        allowNull: true,
      },
      categoryId: {
        type: DataTypes.UUID,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: 'Product',
    }
  );

  return Product;
};
