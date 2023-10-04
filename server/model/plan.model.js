const { DataTypes } = require("sequelize");
const { sequelize } = require("./sequelize/sq.instance");

const FirstDay = sequelize.define(
  "firstDay", 
  {
      code: {
        type: DataTypes.INTEGER,
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
    code: {
      type: DataTypes.INTEGER,
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
    code: {
      type: DataTypes.INTEGER,
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
    code: {
      type: DataTypes.INTEGER,
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