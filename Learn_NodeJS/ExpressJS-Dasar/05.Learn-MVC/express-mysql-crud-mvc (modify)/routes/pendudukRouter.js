const express = require("express");
const router = express.Router();
const pendudukController = require("../controller/pendudukController");

router.get("/", pendudukController.index);
router.get("/create", pendudukController.create);
router.post("/", pendudukController.storage);
router.get("/edit/:nip", pendudukController.edit);
router.put("/:nip", pendudukController.update);
router.delete("/:nip", pendudukController.destroy);


module.exports = router;