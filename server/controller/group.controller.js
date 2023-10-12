const db = require("../model/index");
const {HTTP_STATUS} = require("../utils/http_status")
const {getPlans} = require("./plan.controller")
const express = require("express");
const axios = require("axios");
const app = express();

const createGroup = async (req, res) => {
  try{
    const code = createCode();
    const data = {
      host: req.body.groupInfo.host, 
      code: code, 
      title: req.body.groupInfo.groupName, 
      describe: req.body.groupInfo.groupDesc,
    }
    modelCreateGroup(data)
    return res.status(HTTP_STATUS.CREATED).send(code);
  }catch(error){
    console.log("createGroup function error: ", error);
    return res.status(HTTP_STATUS.BAD_REQUEST).send(error);
  } 
}

const joinGroup = async (req, res) => {
  try{
    if(!(await modelJoinGroup(req.body.data)))
      return res.status(HTTP_STATUS.OK).send("already existed!");
    
    return res.status(HTTP_STATUS.CREATED).send("just joined!");
  }catch(error){
    console.log("joinGroup function error: ", error);
    return res.status(HTTP_STATUS.BAD_REQUEST).send(error);
  }
}

const createCode = (req, res) => {
  let randNum = '';
  for (let i = 0; i < 6; i++) {
    randNum += Math.floor((Math.random() * 8) + 1);
  }
  return randNum;
}

const modelCreateGroup = async (data) => {
  try {
      const user = await db.User.findOne({
        where: { email: data.host },
        include: [{ model: db.Group }],
      });

    const createdGroup = await db.Group.create({
      host: data.host,
      code: data.code,
      title: data.title,
      describe: data.describe,
    });

    await db.GroupMember.create({
      host: data.host,
      code: data.code,
      title: data.title,
      describe: data.describe,
      memberEmail: data.host,
      memberName: user.dataValues.name
    });

    const defaultPlan = [];
    const models = [db.FirstDay, db.SecondDay, db.ThirdDay, db.FourthDay];
    models.forEach((model) => {
      model.create({
        code: data.code,
        plan: JSON.stringify(defaultPlan),
      })
    })

    await user.addGroup(createdGroup); // sequelize에서 제공하는 add 매소드 -> 사용방식은 .addModelName 으로 add 뒤에 모델 이름을 적어서 사용

    return true;
  } catch (error) {
    console.error('modelCreateGroup function error: ', error);
    return false;
  }
};

const modelJoinGroup = async (data) => {
  try{
    const isExist = await db.GroupMember.findAll({
      where: {
        memberEmail: data.email,
        code: data.code,
      }
    })

    if(isExist.length){
      console.log("already existed")
      return false;
    }

    const group = await db.Group.findOne({
      where: { code: data.code }
    });

    await db.GroupMember.create({
      host: group.dataValues.host,
      code: group.dataValues.code,
      title: group.dataValues.title,
      describe: group.dataValues.describe,
      memberEmail: data.email,
      memberName: data.name,
    })

    return true;
  }catch(error){
    console.log("modelJoinGroup function error: ", error);
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
    console.log("groupInfoFind function error: ", error);
    res.status(HTTP_STATUS.BAD_REQUEST).send(error);
  }
}

const getGroupPlans = async (req, res) => {
  try{
    console.log(req.body);
    const code = req.body.data.code;
    const tempPlans = await getPlans(code);
    const plans = tempPlans.map((el, idx) => {
      let obj = {};
      obj[idx+1] = el["dataValues"]["plan"];
      return obj;
    })
    console.log(plans);
    res.status(HTTP_STATUS.OK).send(plans);
  }catch(error){
    console.log("getGroupPlans function error: ", error)
    res.status(HTTP_STATUS.BAD_REQUEST).send(error);
  }
}

module.exports = {
  createGroup,
  joinGroup,
  groupInfoFind,
  getGroupPlans
};