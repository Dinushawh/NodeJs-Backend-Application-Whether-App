const router = require("express").Router();
const userController = require("../controllers/userController");

router.post("/add-new-user", userController.saveUser);
router.post("/update-user", userController.updateUser);
router.post("/get-user-data", userController.getWhereDataAccordingtoDate);

module.exports = router;
