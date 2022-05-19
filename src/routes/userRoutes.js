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

const validationRegister=require('../middleware/validationRegister')
const validationLogin=require('../middleware/validationLogin')
const guestMiddleware=require("../middleware/guestMidleware")
const authMiddleware=require("../middleware/authMidleware")

// login
router.get("/login", guestMiddleware, userController.login);
router.post("/login/users", userController.enviarLogin);
router.post("/logout", userController.logout);
// register
router.get("/register", guestMiddleware, userController.mostrarRegister);
router.post("/register/user", upload.single("avatar"), validationRegister, userController.saveRegister);
// profile
router.get("/profile",userRoute, userController.userProfile);
//router.get("/editProfile", userRoute, userController.editProfile);

router.get("/users/:id/edit",userController.editarUsuario)
router.put('/users/:id',upload.single('avatar'),userController.updateUsers)

router.get("/verUsuarios",userController.usuariosLogiados)

router.get('/Users/:id',userController.usuarioDetalle)
module.exports = router;