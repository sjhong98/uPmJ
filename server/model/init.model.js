const { sequelize } = require("./sequelize/sq.instance");

const initModels = (db) => {

  db.User.hasMany(db.Group, { foreignKey: 'host', sourceKey: 'email' });
  db.Group.belongsTo(db.User, { foreignKey: 'host', targetKey: 'email' });
  db.Group.hasMany(db.FirstDay, { foreignKey: 'id', targetKey: 'code'});
  db.FirstDay.belongsTo(db.Group, { foreignKey: 'id', targetKey: 'code'});
  db.Group.hasMany(db.SecondDay, { foreignKey: 'id', targetKey: 'code'});
  db.SecondDay.belongsTo(db.Group, { foreignKey: 'id', targetKey: 'code'});
  db.Group.hasMany(db.ThirdDay, { foreignKey: 'id', targetKey: 'code'});
  db.ThirdDay.belongsTo(db.Group, { foreignKey: 'id', targetKey: 'code'});
  db.Group.hasMany(db.FourthDay, { foreignKey: 'id', targetKey: 'code'});
  db.FourthDay.belongsTo(db.Group, { foreignKey: 'plidan_id', targetKey: 'code'});

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