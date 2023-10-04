const { sequelize } = require("./sequelize/sq.instance");

const initModels = (db) => {

  db.User.hasMany(db.Group, { foreignKey: 'host', sourceKey: 'email' });
  db.Group.belongsTo(db.User, { foreignKey: 'host', targetKey: 'email' });
  db.Group.hasMany(db.GroupMember, { foreignKey: 'code', sourceKey: 'code' });
  db.GroupMember.belongsTo(db.Group, { foreignKey: 'code', sourceKey: 'code'} );
  
  // // Day 모델들과 Group의 관계 설정 (코드 컬럼 사용)
  const models = ['FirstDay', 'SecondDay', 'ThirdDay', 'FourthDay'];
  models.forEach((models) => {
    db.Group.hasOne(db[models], { foreignKey: 'code', sourceKey: 'code' });
    db[models].belongsTo(db.Group, { foreignKey: 'code', targetKey: 'code' });
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