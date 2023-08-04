const Group = require("../sequelize/group.model");
const express = require("express");
const axios = require("axios");
const app = express();

const createGroup = () => {

}

const joinGroup = () => {
  
}

const groupCode = () => {
  let randNum = ''
  for (let i = 0; i < 6; i++) {
    randNum += Math.floor(Math.random() * 10)
  }
  console.log(randNum)
  return randNum;
}

module.exports = {
  createGroup,
  joinGroup,
  groupCode,
};