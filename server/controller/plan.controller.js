const db = require("../model/index");

const MODELS_MAP = {
  drop1: 'menu',
  drop2: 'FirstDay',
  drop3: 'SecondDay',
  drop4: 'ThirdDay',
  drop5: 'FourthDay'
};

const PLAN_MODELS = ['FirstDay', 'SecondDay', 'ThirdDay', 'FourthDay'];

const viewOrder = async (data) => {
  console.log("view order: ", data);
};

const modifyPlan = async (model, code, item, index, action) => {
  if (model !== 'menu') {
    let planList = await db[model].findOne({ where: { code } });
    planList = JSON.parse(planList.dataValues['plan']);
  
    if (action === "from") {
      planList.splice(index - 1, 1);
    } else if (action === "to") {
      planList.splice(index - 1, 0, item);
    }
  
    await db[model].update({ plan: JSON.stringify(planList) }, { where: { code } });
  }
};

const editPlan = async (data) => {
  const { tripId: code, item, sourceColumnId, sourceIndex, destinationColumnId, destinationIndex } = data;

  const order = [
    [MODELS_MAP[sourceColumnId], sourceIndex, "from"],       
    [MODELS_MAP[destinationColumnId], destinationIndex, "to"]
  ];

  for (const [targetModel, targetIndex, direction] of order) {
    await modifyPlan(targetModel, code, item, targetIndex, direction);
  }
};

const getPlans = async (code) => {
  const plans = [];
  for (let model of PLAN_MODELS) {
    const plan = await db[model].findOne({ where: { code } });
    plans.push(plan);
  }
  return plans;
};

module.exports = {
  viewOrder,
  editPlan,
  getPlans
};
