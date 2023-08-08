const { DataTypes } = require("sequelize");
const { sequelize } = require("./sequelize/sq.instance");

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
    describe: {
      type: DataTypes.STRING,
    }
  },
  {
    timestamps: false,
  }
);

module.exports = { Group };




