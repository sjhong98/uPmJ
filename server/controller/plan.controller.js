const db = require("../model/index");
const express = require("express");
const axios = require("axios");
const app = express();

const savePlan = async (data) => {
  console.log("savePlan Data: ", data)
  console.log(data.sourceColumnId)
} 

module.exports = {
  savePlan
};