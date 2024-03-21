const { Router } = require("express");
const controller = require("./controller");

const router = new Router();

router.post("/district/", controller.addDistrict);
router.post("/data/", controller.addData);
router.get("/", controller.getData);

module.exports = router;
