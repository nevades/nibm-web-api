const { Router } = require("express");
const controller = require("./controller");

const router = new Router();

router.post("/auth", controller.auth);

router.post(
  "/district/add",
  [controller.auther, controller.admin],
  controller.addDistrict
);

router.post(
  "/district/delete",
  [controller.auther, controller.admin],
  controller.deleteDistrict
);

router.post(
  "/user/add",
  [controller.auther, controller.admin],
  controller.addUser
);

router.post(
  "/user/delete",
  [controller.auther, controller.admin],
  controller.deleteUser
);

router.post(
  "/data/add",
  [controller.auther, controller.editor],
  controller.addData
);

router.get("/", controller.getData);

router.post("/specific", controller.getSpecificData);

router.post("/historical", controller.getHistoricalData);

router.get("/district/get", controller.getDistrict);

module.exports = router;
