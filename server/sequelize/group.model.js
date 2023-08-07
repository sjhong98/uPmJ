const { Sequelize, DataTypes } = require("sequelize");
const { User } = require("./user.model");

require("dotenv").config();

const sequelize = new Sequelize(
  'pj', 
  process.env.DB_ID, 
  process.env.DB_PW, 
{
host: 'localhost',
dialect: 'postgres'
});

const Group = sequelize.define(
  "group", 
  {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      host: {
        type: DataTypes.STRING,
      },
      code: {
        type: DataTypes.INTEGER,
      },
  },
  {
    timestamps: false
  }
);
Group.belongsTo(User, { foreignKey: "host", targetKey: "nickname" });

Group.sync().then(() => {
  console.log("Group Model synced");
});

const modelCreateGroup = async (data) => {

  // const group = await User.findOne({
  //   include: [{ // join할 테이블 선택
  //     model: Group,
  //   }]
  // })

  // console.log(group);

  // group.create({
  //   host: `${data.nickname}`,
  //   code: `${data.code}`,
  // });
  // return true;
}

modelCreateGroup();

const modelJoinGroup = async (data) => {
  // const groupId = data.id;
  // id로 그룹 찾고
  // 그룹에 조인하고싶은 사람 데이터 꺼내서 DB 중 해당되는 id 그룹에 포함시키기 -> update
}


module.exports = { sq: sequelize, modelCreateGroup, modelJoinGroup, Group };


