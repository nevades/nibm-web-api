const { Router } = require("express");
const controller = require("./controller");

const router = new Router();

router.post(
  "/district/",
  [controller.auther, controller.admin],
  controller.addDistrict
);
router.post(
  "/data/",
  [controller.auther, controller.editor],
  controller.addData
);
router.get("/", [controller.auther, controller.viewer], controller.getData);
router.post("/auth", controller.auth);

module.exports = router;
