const { DataTypes } = require("sequelize");
const { sequelize } = require("./sequelize/sq.instance");

const Group = sequelize.define(
  'group', 
  {
    host: {
      type: DataTypes.STRING,
      references: {
        model: 'users', 
        key: 'email',
      },
    },
    code: {
      type: DataTypes.INTEGER,
      unique: true, 
    },
    title: {
      type: DataTypes.STRING,
    },
    describe: {
      type: DataTypes.STRING,
    }
  },
  {
    timestamps: false,
  }
);

module.exports = { Group };




