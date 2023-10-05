const db = require("../model/index");
const express = require("express");
const axios = require("axios");
const app = express();

const signIn = async (req, res) => {
  try{
    const {access: access_token, refresh: refresh_token} = req.body.token;
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
  
    if (existedData === false) {
      return res.status(201).json({justCreatedData, status: "just registered"});
    } else {
      return res.status(200).json({existedData, status: "already existed"});  
    }
  }catch(error){
    console.log("signIn function error: ",error);
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
      const user = await db.User.findOne({
        where: { email: userInfo.email },
      });
      const groupList = await db.GroupMember.findAll({
        where: { memberEmail: userInfo.email },
      });
      
      return {user: user, groupList: groupList};
    }
  }catch(error){
    console.log("userFind function error: ",error);
  }
}

const userRegister = async (userInfo) => {
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