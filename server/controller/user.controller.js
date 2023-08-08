const db = require("../model/index");
const express = require("express");
const axios = require("axios");
const app = express();

const signIn = async (req, res) => {
  try{
    const access_token = req.body.token.access;
    const refresh_token = req.body.token.refresh;
    const userInfo = await axios.post("https://kapi.kakao.com/v2/user/me", {}, {  // 두번째는 받는 파라미터, 세번째가 보내는 파라미터
      headers: {
        Authorization: `Bearer ${access_token}`,
      }
    });
    const justCreatedData = {
      name:userInfo.data.properties.nickname, 
      email:userInfo.data.kakao_account.email,
    };
    const existedData = await userFind(justCreatedData) 

    if (existedData) {
      return res.status(200).json({existedData, status: "already existed"}); // 이미 존재하는 내용 
    } else {
      return res.status(201).json({justCreatedData, status: "just registered"}); // 방금 등록한 내용
    }
  }catch(error){
    console.log(error);
    return res.status(400).send(error);
  }
}

const userFind = async (userInfo) => {
  try{
    const data = await db.User.findOne({where: {email: `${userInfo.email}`}});
    if(data === null){
      userRegister(userInfo);
      return false;
    }else{
      const userWithGroups = await db.User.findOne({
        where: { email: userInfo.email },
        include: [{ model: db.Group }],
      });
      return userWithGroups;
    }
  }catch(error){
    console.log(error);
  }
}

const userRegister = async (userInfo) => {
  console.log(userInfo)
  db.User.create({
    name: `${userInfo.name}`,
    email: `${userInfo.email}`,
  });
}

module.exports = {
  signIn,
  userFind, 
  userRegister,
};