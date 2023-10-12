const { DataTypes } = require("sequelize");
const { sequelize } = require("./sequelize/sq.instance");

const PLAN_MODELS = {
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

const FirstDay = defineTemplate(PLAN_MODELS.FirstDay)
const SecondDay = defineTemplate(PLAN_MODELS.SecondDay)
const ThirdDay = defineTemplate(PLAN_MODELS.ThirdDay)
const FourthDay = defineTemplate(PLAN_MODELS.FourthDay)

module.exports = { FirstDay, SecondDay, ThirdDay, FourthDay };