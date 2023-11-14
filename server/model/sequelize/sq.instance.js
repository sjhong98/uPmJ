const { Sequelize } = require("sequelize");
require("dotenv").config();

const postgres = 'postgres';
const postgresPort = 5432

const sequelize = new Sequelize(
  process.env.DB_NAME, 
  process.env.DB_USER, 
  process.env.DB_PASS, 
  {
    host: process.env.DB_HOST,
    port: postgresPort, 
    dialect: postgres,
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false 
      }
    }
});

sequelize.sync();

module.exports = {sequelize}