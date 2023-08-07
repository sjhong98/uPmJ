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
  "users", // users 생성됨.
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

const userFind = async (userInfo) => {
  try{
    const data = await User.findOne({where: {email: `${userInfo.email}`}});
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
  User.create({
    name: `${userInfo.name}`,
    email: `${userInfo.email}`,
  });
  return true;
}

module.exports = { sq: sequelize, userFind, userRegister, User };