const Group = require("../sequelize/group.model");
const express = require("express");
const axios = require("axios");
const app = express();

const createGroup = async (req, res) => {
  try{
    // const userInfo = req.body.userInfo;
    // sequelize로 group 테이블에 유저이름 삽입.
    Group
    // sequelize로 group 테이블에 그룹코드 삽입.
    const code = createCode()
    // 최초 그룹 생성이므로 그룹코드를 전송해줌
    
    return res.status(200).send(createCode());
  }catch(error){
    return res.status(400).send(error);
  } 
}

const joinGroup = async (req, res) => {
  
}
const requestCode = async (req, res) => {
  try{
    const code = await createCode();
    // 추가적으로 코드를 요청했으니, 이전 DB에 있던 코드는 새로 만든 코드로 대체
    // DB에 업데이트 시키는 코드 필요
    return res.status(200).send(code);
  } catch(error){
    return res.status(400).send(error);
  }
  
}

const createCode = async (req, res) => {
  // 최초 그룹 생성 시와, 이후 코드 요청 시 사용되는 함수
  let randNum = ''
  for (let i = 0; i < 6; i++) {
    randNum += Math.floor(Math.random() * 10)
  }
  return randNum;
}

module.exports = {
  createGroup,
  joinGroup,
  createCode,
  requestCode,
};