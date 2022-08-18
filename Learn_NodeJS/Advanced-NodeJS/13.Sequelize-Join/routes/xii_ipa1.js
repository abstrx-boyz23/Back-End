// May, 16 2022
const express = require("express");
const {db} = require("../config/database/mysql");
const router = express.Router();
let controller = require("../controller/index");

router.get("/search", controller.xii_ipa1.getSearchKeyword);
router.get("/", controller.xii_ipa1.getAll);
router.get("/:no", controller.xii_ipa1.getOne);
router.post("/", controller.xii_ipa1.post);
router.put("/:no", controller.xii_ipa1.put);
router.delete("/:no", controller.xii_ipa1.delete);

module.exports = {router};