const { Sequelize, DataTypes } = require("sequelize");

require("dotenv").config();

const sequelize = new Sequelize(
  'travel', 
  process.env.DB_ID, 
  process.env.DB_PW, 
{
host: 'localhost',
dialect: 'postgres'
});

const Group = sequelize.define(
  "group", 
  {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      member: {
        type: DataTypes.STRING,
      },
  },
  {
    timestamps: false
  }
);

Group.sync().then(() => {
  console.log("Group Model synced");
});