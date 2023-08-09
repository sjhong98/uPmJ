const { sequelize } = require("./sequelize/sq.instance");
const { User } = require("./user.model");
const { Group, GroupMember } = require("./group.model");
const { FirstDay, SecondDay, ThirdDay, FourthDay } = require("./plan.model");
const { initModels } = require("./init.model")

const db = {};

db.sequelize = sequelize;
db.User = User;
db.Group = Group;
db.GroupMember = GroupMember;
db.FirstDay = FirstDay;
db.SecondDay = SecondDay;
db.ThirdDay = ThirdDay;
db.FourthDay = FourthDay;

initModels(db);

module.exports = db;