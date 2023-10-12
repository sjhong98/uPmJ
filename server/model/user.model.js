const { DataTypes } = require("sequelize");
const { sequelize } = require("./sequelize/sq.instance");

const User = sequelize.define(
  'users', 
  {
    group_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
    },
    email: {
      type: DataTypes.STRING,
      unique: true, 
    },
  },
  {
    timestamps: false,
  }
);

module.exports = { User };

