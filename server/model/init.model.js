const { sequelize } = require("./sequelize/sq.instance");

const initModels = (db) => {
  db.User.hasMany(db.Group, { foreignKey: 'host', sourceKey: 'email' });
  db.Group.belongsTo(db.User, { foreignKey: 'host', targetKey: 'email' });
  db.Group.hasMany(db.GroupMember, { foreignKey: 'code', sourceKey: 'code' });
  db.GroupMember.belongsTo(db.Group, { foreignKey: 'code', sourceKey: 'code'} );
  
  const models = ['FirstDay', 'SecondDay', 'ThirdDay', 'FourthDay'];
  models.forEach((models) => {
    db.Group.hasOne(db[models], { foreignKey: 'code', sourceKey: 'code' });
    db[models].belongsTo(db.Group, { foreignKey: 'code', targetKey: 'code' });
  });

  db.sequelize
    .sync({ force: false })
    .then(() => {
      console.log('Database synced');
    })
    .catch((error) => {
      console.error('Error syncing database:', error);
    });
}

module.exports = { initModels };