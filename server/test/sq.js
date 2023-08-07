const { DataTypes } = require('sequelize');
const { sequelize } = require('../model/sequelize/sq.instance');

const User = sequelize.define(
  'User', // 테이블명을 변경하여 정의
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
      unique: true, // 유니크 제약 조건 추가
    },
  },
  {
    timestamps: false,
  }
);

const Group = sequelize.define(
  'Group', // 테이블명을 변경하여 정의
  {
    // id 컬럼을 제거하고 userEmail 컬럼을 추가하여 관계 형성
    host: {
      type: DataTypes.STRING,
    },
    code: {
      type: DataTypes.INTEGER,
    },
    userEmail: {
      type: DataTypes.STRING,
      references: {
        model: 'Users', // User 모델과의 관계를 설정
        key: 'email',
      },
    },
  },
  {
    timestamps: false,
  }
);

// 1:N 관계 설정
User.hasMany(Group, { foreignKey: 'userEmail', sourceKey: 'email' }); // User 모델은 여러 개의 Group 모델을 가질 수 있음
Group.belongsTo(User, { foreignKey: 'userEmail', targetKey: 'email' }); // Group 모델은 하나의 User 모델에 속함

sequelize
  .sync({ force: false }) // 데이터베이스 동기화
  .then(() => {
    console.log('Database synced');
  })
  .catch((error) => {
    console.error('Error syncing database:', error);
  });
