const { sequelize } = require("./sequelize/sq.instance");

const initModels = (db) => {

  db.User.hasMany(db.Group, { foreignKey: 'host', sourceKey: 'email' });
  db.Group.belongsTo(db.User, { foreignKey: 'host', targetKey: 'email' });

  // Day 모델들과 Group의 관계 설정 (코드 컬럼 사용)
  const dayModels = ['FirstDay', 'SecondDay', 'ThirdDay', 'FourthDay'];
  dayModels.forEach((dayModel) => {
    db.Group.hasMany(db[dayModel], { foreignKey: 'id', sourceKey: 'code' });
    db[dayModel].belongsTo(db.Group, { foreignKey: 'id', targetKey: 'code' });
  });

  db.sequelize
    .sync({ force: false }) // 데이터베이스 동기화
    .then(() => {
      console.log('Database synced');
    })
    .catch((error) => {
      console.error('Error syncing database:', error);
    });

}

module.exports = { initModels };