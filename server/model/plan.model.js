const { DataTypes } = require("sequelize");
const { sequelize } = require("./sequelize/sq.instance");

const modelsName = {
  FirstDay: 'firstDay', SecondDay: 'secondDay', ThirdDay: 'thirdDay', FourthDay: 'fourthDay'
};

const defineTemplate = (day) => {
  return sequelize.define(
    day, 
    {
        code: {
          type: DataTypes.INTEGER,
          references: {
            model: 'groups',
            key: 'code',
          },
        },
        plan: {
          type: DataTypes.TEXT,
        },
    },
    {
      timestamps: false
    }
  );
}

const FirstDay = defineTemplate(modelsName.FirstDay)
const SecondDay = defineTemplate(modelsName.SecondDay)
const ThirdDay = defineTemplate(modelsName.ThirdDay)
const FourthDay = defineTemplate(modelsName.FourthDay)

module.exports = { FirstDay, SecondDay, ThirdDay, FourthDay };