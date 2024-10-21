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
        allowNull: false, // Se o nome é obrigatório
      },
      quantity: {
        type: DataTypes.INTEGER,
        allowNull: false, // Se a quantidade é obrigatória
      },
      inStock: {
        type: DataTypes.BOOLEAN,
        allowNull: false, // Se o status em estoque é obrigatório
      },
      productImage: {
        type: DataTypes.STRING,
        allowNull: true, // Se a imagem do produto não é obrigatória
      },
      price: {
        type: DataTypes.INTEGER,
        allowNull: false, // Isso deve ser verdadeiro se o preço é obrigatório
      },
      expiryDate: {
        type: DataTypes.DATE,
        allowNull: true, // Se a data de validade não é obrigatória
      },
      categoryId: {
        type: DataTypes.UUID,
        allowNull: false, // Se a categoria é obrigatória
      },
    },
    {
      sequelize,
      modelName: 'Product',
    }
  );

  return Product;
};
