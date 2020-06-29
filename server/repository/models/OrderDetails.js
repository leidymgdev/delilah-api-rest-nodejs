const Sequelize = require("sequelize");
const database = require("../database");

const OrderDetails = database.define("orderdetails", {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  orderId: {
    type: Sequelize.INTEGER,
    require: true,
    allowNull: false
  },
  productId: {
    type: Sequelize.INTEGER,
    require: true,
    allowNull: true
  },
  quantity: {
    type: Sequelize.INTEGER,
    require: true,
    allowNull: false,
    validate: { notEmpty: true }
  },
  price: {
    type: Sequelize.DECIMAL,
    require: true,
    allowNull: true
  }
});

module.exports = OrderDetails;