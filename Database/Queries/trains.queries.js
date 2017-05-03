const db = require("../database.js");

const findTrain = (num) => {
  return db("trains")
    .select()
    .where("num", "=",  num);
};

module.exports = {
  findTrain: findTrain
};
