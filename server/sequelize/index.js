const { Sequelize, DataTypes } = require("sequelize");
const User = require("./user.model");
const Group = require("./group.model");

require("dotenv").config();

const sequelize = new Sequelize(
  'pj', 
  process.env.DB_ID, 
  process.env.DB_PW, 
  {
  host: 'localhost',
  dialect: 'postgres'
});