const { DataTypes } = require("sequelize");
const { sequelize } = require("./sequelize/sq.instance");

const User = sequelize.define(
  'users', // 테이블명을 변경하여 정의
  {
    group_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
    },
    email: {
      type: DataTypes.STRING,
      unique: true, // 유니크 제약 조건 추가
    },
  },
  {
    timestamps: false,
  }
);

module.exports = { User };

// const userFind = async (userInfo) => {
//   try{
//     const data = await User.findOne({where: {email: `${userInfo.email}`}});
//     if(data === null){
//       return !userRegister(userInfo);
//     }else{
//       console.log("already exist");
//       return true;
//     }
//   }catch(error){
//     console.log(error);
//   }
// }

// const userRegister = async (userInfo) => {
//   console.log(userInfo)
//   User.create({
//     name: `${userInfo.name}`,
//     email: `${userInfo.email}`,
//   });
//   return true;
// }

// module.exports = { sq: sequelize, userFind, userRegister, User };