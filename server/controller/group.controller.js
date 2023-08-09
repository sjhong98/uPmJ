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
    // const {randomNumber: groupCode, email} = req.body.data;
    // test용 temp
    // const groupCode = "code";
    // const email = "test@test.com";



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

    await user.addGroup(createdGroup);

    return true;
  } catch (error) {
    console.error('modelCreateGroup function error: ', error);
    return false;
  }
};


const modelJoinGroup = async (data) => {
  // const groupId = data.id;
  // id로 그룹 찾고
  // 그룹에 조인하고싶은 사람 데이터 꺼내서 DB 중 해당되는 id 그룹에 포함시키기 -> update
}

module.exports = {
  createGroup,
  joinGroup,
};