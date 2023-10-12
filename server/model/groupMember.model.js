const { DataTypes } = require("sequelize");
const { sequelize } = require("./sequelize/sq.instance");

const GroupMember = sequelize.define(
  "groupMember", 
  {
      host: {
        type: DataTypes.STRING,
      },
      code: {
        type: DataTypes.INTEGER,
        references: {
          model: 'groups', 
          key: 'code',
        },
      },
      title: {
        type: DataTypes.STRING,
      },
      describe: {
        type: DataTypes.STRING,
      },
      memberEmail: {
        type: DataTypes.STRING,
      },
      memberName: {
        type: DataTypes.STRING,
      }
  },
  {
    timestamps: false
  }
);

module.exports = { GroupMember };




