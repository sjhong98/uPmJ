const db = require("../model/index");
const express = require("express");
const axios = require("axios");
const app = express();

const viewOrder = async (data) => {
  console.log("view order: ", data)
} 

const editPlan = async (data) => {

  const models = {
    drop1:'menu',
    drop2:'FirstDay', 
    drop3:'SecondDay', 
    drop4:'ThirdDay',
    drop5:'FourthDay'
  };

  const code = data.tripId;
  const item = data.item;
  const order = [
    [models[data.sourceColumnId], data.sourceIndex, "from"],        // from
    [models[data.destinationColumnId], data.destinationIndex, "to"] // to
  ];

  for (const [targetModel, targetIndex, direction] of order) {
    console.log(targetModel, targetIndex, direction);

    if(targetModel !== 'menu'){
      var lastPlanList = await db[targetModel].findAll({
        where: { code: code },
      })

      lastPlanList = JSON.parse(lastPlanList[0].dataValues['plan']);

      if(direction === "from"){
        lastPlanList.splice(targetIndex-1, 1)
        console.log("lastPlanList 2 from: ", lastPlanList);
      }else if(direction === "to"){
        lastPlanList.splice(targetIndex-1, 0, item)
        console.log("lastPlanList 2 to: ", lastPlanList);
      }

      await db[targetModel].update({plan: JSON.stringify(lastPlanList)},{ where: { code: code }})
    }
  }
}

const getPlans = async (code) => {
  const plans = [];
  const models = ['FirstDay', 'SecondDay', 'ThirdDay', 'FourthDay'];
  for(let model of models) {
    const plan = await db[model].findOne({
      where: { code: code },
    })
    plans.push(plan)
  }
  return plans;
}

module.exports = {
  viewOrder,
  editPlan,
  getPlans
};