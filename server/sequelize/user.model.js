const { Sequelize, DataTypes } = require("sequelize");

require("dotenv").config();

const sequelize = new Sequelize(
  'pj', 
  process.env.DB_ID, 
  process.env.DB_PW, 
{
host: 'localhost',
dialect: 'postgres'
});

const User = sequelize.define(
  "user", // users 생성됨.
  {
      id: {
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
      },
  },
  {
    timestamps: false
  }
);

User.sync().then(() => {
  console.log("Users Model synced");
});

// const userFind = async (userInfo) => {
//   const data = await member.findOne({where: {email: `${userInfo.email}`}});
//   if(data === null){
//     return !userRegister(userInfo);
//   }else{
//     console.log("already exist");
//     return true;
//   }
// }

// const userRegister = async (userInfo) => {
//   Member.create({
//     name: `${userInfo.nickname}`,
//     email: `${userInfo.email}`,
//   });
//   return true;
// }

// module.exports = { sq: sequelize, userFind, userRegister };