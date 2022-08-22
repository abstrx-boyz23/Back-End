// August, 20 2022

const model = require("../config/model/index");
const controller = {};

// Get Method
controller.getAll = async (req, res, next) => {
  const result = await model.hobbies.findAll();
  res.status(200).json({
    message: "Get Hobbies Success",
    data: result
  });
};

// Post Method
controller.post = async (req, res, next) => {
  const result = await model.hobbies.bulkCreate(req.body);
  
  console.log(result);
  res.status(201).json({
    message: "Post Hobbies Success",
    data: result
  });
};

// Delete Method
controller.delete = async (req, res, next) => {
  const result = await model.hobbies.destroy({
    where: {kd_hobi: req.body.kd_hobi}
  });
  res.status(200).json({
    message: "Delete Method Success",
  });
};

module.exports = controller;