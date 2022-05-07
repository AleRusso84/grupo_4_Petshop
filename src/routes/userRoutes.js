const express = require("express");
const router = express.Router();
const multer = require("multer");
const path = require("path");

const userController = require("../controllers/userController");
const registerValidation = require("../middleware/registerValidation");

const userRoute = require("../middleware/userRoute");
const guestRoute = require("../middleware/guestRoute");

// multer user
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "public/images/users");
  },
  filename: function (req, file, cb) {
    cb(
      null,
      file.fieldname + "-" + Date.now() + path.extname(file.originalname)
    );
  },
});

const upload = multer({ storage });

// login
router.get("/login", guestRoute, userController.login);
router.post("/login", guestRoute, userController.authenticate);
router.post("/logout", userRoute, userController.logout);
// register
router.get("/register", guestRoute, userController.register);
router.post("/", guestRoute, upload.single("image"), registerValidation, userController.saveUser);
// profile
router.get("/profile", userRoute, userController.userProfile);
//router.get("/editProfile", userRoute, userController.editProfile);

module.exports = router;