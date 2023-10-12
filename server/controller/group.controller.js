const db = require("../model/index");
const { getPlans } = require("./plan.controller")
const { HTTP_STATUS } = require("../utils/http_status")

const createGroup = async (req, res) => {
  try{
    const { host, groupName: title, groupDesc: describe } = req.body.groupInfo;
    const code = createCode();

    const data = {
      host,
      code,
      title,
      describe
    };

    modelCreateGroup(data)
    return res.status(HTTP_STATUS.CREATED).send(code);
  }catch(error){
    console.error(error);
    return res.status(HTTP_STATUS.BAD_REQUEST).send(error.message);
  } 
}

const joinGroup = async (req, res) => {
  try{
    if(!(await modelJoinGroup(req.body.data)))
      return res.status(HTTP_STATUS.OK).send("already existed!");
    
    return res.status(HTTP_STATUS.CREATED).send("just joined!");
  }catch(error){
    console.error(error);
    return res.status(HTTP_STATUS.BAD_REQUEST).send(error.message);
  }
}

const createCode = () => {
  let randNum = '';
  for (let i = 0; i < 6; i++) {
    randNum += Math.floor((Math.random() * 8) + 1);
  }
  return randNum;
}

const modelCreateGroup = async (data) => {
  try {
    const { host, code, title, describe } = data;

    const user = await db.User.findOne({
      where: { email: host },
      include: [{ model: db.Group }],
    });

    const createdGroup = await db.Group.create({
      host: host,
      code: code,
      title: title,
      describe: describe,
    });

    await db.GroupMember.create({
      host: host,
      code: code,
      title: title,
      describe: describe,
      memberEmail: host,
      memberName: user.dataValues.name
    });

    const defaultPlan = JSON.stringify([])
    const models = [db.FirstDay, db.SecondDay, db.ThirdDay, db.FourthDay];
    models.forEach((model) => {
      model.create({
        code: code,
        plan: defaultPlan,
      })
    })

    await user.addGroup(createdGroup); // sequelize에서 제공하는 add 매소드 -> 사용방식은 .addModelName 으로 add 뒤에 모델 이름을 적어서 사용

    return true;
  } catch (error) {
    console.error(error);
    return false;
  }
};

const modelJoinGroup = async (data) => {
  try{
    const { email: memberEmail, name: memberName, code } = data;

    const isExist = await db.GroupMember.findAll({
      where: {
        memberEmail: memberEmail,
        code: code,
      }
    })

    if(isExist.length){
      console.error("already existed")
      return false;
    }

    const group = await db.Group.findOne({
      where: { code: code }
    });

    await db.GroupMember.create({
      host: group.dataValues.host,
      code: group.dataValues.code,
      title: group.dataValues.title,
      describe: group.dataValues.describe,
      memberEmail: memberEmail,
      memberName: memberName,
    })

    return true;
  }catch(error){
    console.error(error);
  }
}

const groupInfoFind = async (req, res) => {
  try{
    const code = req.body.data.code;

    const group = await db.Group.findOne({
      where: { code: code },
      include: [{ model: db.GroupMember }], 
    });

    res.status(HTTP_STATUS.OK).send(group);
  }catch(error){
    console.error(error);
    res.status(HTTP_STATUS.BAD_REQUEST).send(error);
  }
}

const getGroupPlans = async (req, res) => {
  try{
    const code = req.body.data.code;
    const tempPlans = await getPlans(code);
    const plans = tempPlans.map((el, idx) => {
      let obj = {};
      obj[idx+1] = el["dataValues"]["plan"];
      return obj;
    })
    console.log(plans)
    res.status(HTTP_STATUS.OK).send(plans);
  }catch(error){
    console.error(error)
    res.status(HTTP_STATUS.BAD_REQUEST).send(error);
  }
}

module.exports = {
  createGroup,
  joinGroup,
  groupInfoFind,
  getGroupPlans
};