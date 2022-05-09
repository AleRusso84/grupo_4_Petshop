const express = require("express");
const router = express.Router();
const multer = require("multer");
const path = require("path");



const userController = require("../controllers/userController");

const userRoute = require("../middleware/userRoute");
const guestRoute = require("../middleware/guestRoute");

// multer user
let storage=multer.diskStorage({
  destination:(req,file,callback)=>{
      let folder=path.join(__dirname,'../../public/images/users');
      callback(null,folder);
  },
  filename:(req, file, callback)=>{
      let imageName= "usuario-"+Date.now()+path.extname(file.originalname);
      callback(null, imageName);
  }
})

let upload=multer({storage:storage});

const validation=require('../middleware/validation')

// login
router.get("/login", userController.login);
router.post("/login", guestRoute, userController.authenticate);
router.post("/logout", userRoute, userController.logout);
// register
router.get("/register", guestRoute, userController.mostrarRegister);
router.post("/register/user", upload.single("avatar"), validation, userController.saveRegister);
// profile
router.get("/profile", userRoute, userController.userProfile);
//router.get("/editProfile", userRoute, userController.editProfile);

module.exports = router;