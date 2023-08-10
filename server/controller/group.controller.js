const db = require("../model/index");
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
    return res.status(200).send(code);
  }catch(error){
    console.log("createGroup function error: ", error);
    return res.status(400).send(error);
  } 
}

const joinGroup = async (req, res) => {
  try{
    const data = req.body.data;
    
    // test code -> 삭제가능
    // const data = {code: 628718, email: "test@test.com", name: "홍길동"}
  
    if(!(await modelJoinGroup(data)))
      return res.status(201).send("already existed!");
    
    return res.status(200).send("just joined!");
  }catch(error){
    console.log("joinGroup function error: ", error);
    return res.status(400).send(error);
  }
}

const createCode = (req, res) => {
  let randNum = ''
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

    await user.addGroup(createdGroup); // sequelize에서 제공하는 add 매소드 -> 사용방식은 .addModelName 으로 add 뒤에 모델 이름을 적어서 사용

    return true;
  } catch (error) {
    console.error('modelCreateGroup function error: ', error);
    return false;
  }
};

const modelJoinGroup = async (data) => {
  try{
    const group = await db.Group.findOne({
      where: { code: data.code },
      include: [{ model: db.GroupMember }], 
    });

    if(groupMemberFind(group.groupMembers, data.email)){
      console.log("already existed")
      return false;
    }
    
    const member = await db.GroupMember.create({
      email: data.email,
      name: data.name,
    })
    await group.addGroupMember(member);
    return true;
  }catch(error){
    console.log("modelJoinGroup function error: ", error);
  }
}

const groupMemberFind = (groupData, target) => {
  var result = false;
  groupData.forEach(el => {
    if(el.dataValues.email === target)
      result = true;
  });
  return result;
}

const groupInfoFind = async (req, res) => {
  try{
    const code = req.body.data.code;

    const group = await db.Group.findOne({
      where: { code: code },
      include: [{ model: db.GroupMember }], 
    });

    res.status(200).send(group);
  }catch(error){
    console.log("groupInfoFind function error: ", error);
    res.status(400).send(error);
  }
}

//

module.exports = {
  createGroup,
  joinGroup,
  groupInfoFind,
};