const axios = require("axios");
const db = require("../model/index");
const { HTTP_STATUS } = require("../utils/http_status")

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
      return res.status(HTTP_STATUS.CREATED).json({justCreatedData, status: "just registered"});
    } else {
      return res.status(HTTP_STATUS.OK).json({existedData, status: "already existed"});  
    }
  }catch(error){
    console.error("signIn function error: ",error);
    return res.status(HTTP_STATUS.BAD_REQUEST).send(error.message);
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
    console.error("userFind function error: ", error);
  }
}

const userRegister = async (userInfo) => {
  const {name, email} = userInfo;
  db.User.create({ name, email });
}

module.exports = {
  signIn,
  userFind, 
  userRegister,
};