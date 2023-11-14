const { sequelize } = require("./sequelize/sq.instance");
const { User } = require("./user.model");
const { Group } = require("./group.model");
const { GroupMember } = require("./groupMember.model");
const { FirstDay, SecondDay, ThirdDay, FourthDay } = require("./plan.model");
const { initModels } = require("./init.model")

const db = {};

db.sequelize = sequelize;

const models = { User, Group, GroupMember, FirstDay, SecondDay, ThirdDay, FourthDay };
for (const modelName in models) {
    db[modelName] = models[modelName];
}
initModels(db);

module.exports = db;