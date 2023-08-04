const { Sequelize, DataTypes } = require("sequelize");

require("dotenv").config();

const sequelize = new Sequelize(
  'pj', 
  process.env.DB_ID, 
  process.env.DB_PW, 
{
host: 'localhost',
dialect: 'postgres'
});

const firstDay = sequelize.define(
  "firstDay", 
  {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      plan: {
        type: DataTypes.STRING,
      },
  },
  {
    timestamps: false
  }
);

const secondDay = sequelize.define(
  "secondDay", 
  {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      plan: {
        type: DataTypes.STRING,
      },
  },
  {
    timestamps: false
  }
);

const thirdDay = sequelize.define(
  "thirdDay", 
  {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      plan: {
        type: DataTypes.STRING,
      },
  },
  {
    timestamps: false
  }
);

const fourthDay = sequelize.define(
  "fourthDay", 
  {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      plan: {
        type: DataTypes.STRING,
      },
  },
  {
    timestamps: false
  }
);


firstDay.sync().then(() => {
  console.log("firstDay Model synced");
});

secondDay.sync().then(() => {
  console.log("secondDay Model synced");
});

thirdDay.sync().then(() => {
  console.log("thirdDay Model synced");
});

fourthDay.sync().then(() => {
  console.log("fourthDay Model synced");
});

