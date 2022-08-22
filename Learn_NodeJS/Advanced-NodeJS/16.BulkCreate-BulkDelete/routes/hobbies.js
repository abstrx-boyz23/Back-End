// August, 20 2022

const express = require("express");
const router = express.Router();
const controller = require("../controller/index");

router.get("/", controller.hobbies.getAll);
router.post("/", controller.hobbies.post);
router.delete("/", controller.hobbies.delete);

module.exports = {router};