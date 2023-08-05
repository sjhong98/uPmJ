const User = require("../sequelize/user.model");
const express = require("express");
const axios = require("axios");
const app = express();

const userRegister = async (req, res) => {
  try{
    const access_token = req.body.token.access;
    const refresh_token = req.body.token.refresh;

    const userInfo = await axios.post("https://kapi.kakao.com/v2/user/me", {}, {  // 두번째는 받는 파라미터, 세번째가 보내는 파라미터
      headers: {
        Authorization: `Bearer ${access_token}`,
      }
    });
    const temp = {name:userInfo.data.properties.nickname, email:userInfo.data.kakao_account.email};
    return await User.userFind(temp)
    ? (res.status(200).send(temp)) // 이미 존재할경우
    : (res.status(201).send(temp)) // 새로 회원가입 시킴
  }catch(error){
    console.log(error);
    return res.status(400).send(error);
  }
}

module.exports = {
  userRegister,
};