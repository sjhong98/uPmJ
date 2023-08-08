const { DataTypes } = require("sequelize");
const { sequelize } = require("./sequelize/sq.instance");

const FirstDay = sequelize.define(
  "firstDay", 
  {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
        references: {
          model: 'groups', 
          key: 'code',
        },
      },
      plan: {
        type: DataTypes.STRING,
      },
  },
  {
    timestamps: false
  }
);

const SecondDay = sequelize.define(
  "secondDay", 
  {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
        references: {
          model: 'groups', 
          key: 'code',
        },
      },
      plan: {
        type: DataTypes.STRING,
      },
  },
  {
    timestamps: false
  }
);

const ThirdDay = sequelize.define(
  "thirdDay", 
  {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
        references: {
          model: 'groups', 
          key: 'code',
        },
      },
      plan: {
        type: DataTypes.STRING,
      },
  },
  {
    timestamps: false
  }
);

const FourthDay = sequelize.define(
  "fourthDay", 
  {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
        references: {
          model: 'groups', 
          key: 'code',
        },
      },
      plan: {
        type: DataTypes.STRING,
      },
  },
  {
    timestamps: false
  }
);

module.exports = { FirstDay, SecondDay, ThirdDay, FourthDay };