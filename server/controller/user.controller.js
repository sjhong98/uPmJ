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
    const data = {
      name:userInfo.data.properties.nickname, 
      email:userInfo.data.kakao_account.email
    };
    return await userFind(data)
    ? (res.status(200).send(data)) // 이미 존재할경우
    : (res.status(201).send(data)) // 새로 회원가입 시킴
  }catch(error){
    console.log(error);
    return res.status(400).send(error);
  }
}

const userFind = async (userInfo) => {
  try{
    const data = await db.User.findOne({where: {email: `${userInfo.email}`}});
    if(data === null){
      return !userRegister(userInfo);
    }else{
      console.log("already exist");
      return true;
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
  return true;
}

module.exports = {
  signIn,
  userFind, 
  userRegister,
};