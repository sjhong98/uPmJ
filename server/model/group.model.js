const { DataTypes } = require("sequelize");
const { sequelize } = require("./sequelize/sq.instance");
// console.log(db.sequelize)


const Group = sequelize.define(
  'group', // 테이블명을 변경하여 정의
  {
    host: {
      type: DataTypes.STRING,
      references: {
        model: 'users', // User 모델과의 관계를 설정
        key: 'email',
      },
    },
    code: {
      type: DataTypes.INTEGER,
      unique: true, 
    },
    title: {
      type: DataTypes.STRING,
    },
    subtitle: {
      type: DataTypes.STRING,
    }
  },
  {
    timestamps: false,
  }
);

module.exports = { Group };

// const modelCreateGroup = async (data) => {

//   // const group = await User.findOne({
//   //   include: [{ // join할 테이블 선택
//   //     model: Group,
//   //   }]
//   // })

//   // console.log(group);

//   // group.create({
//   //   host: `${data.nickname}`,
//   //   code: `${data.code}`,
//   // });
//   // return true;
// }

// modelCreateGroup();

// const modelJoinGroup = async (data) => {
//   // const groupId = data.id;
//   // id로 그룹 찾고
//   // 그룹에 조인하고싶은 사람 데이터 꺼내서 DB 중 해당되는 id 그룹에 포함시키기 -> update
// }


// module.exports = { sq: sequelize, modelCreateGroup, modelJoinGroup, Group };


