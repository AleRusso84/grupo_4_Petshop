const express = require('express'); //requerimos express
const router = express.Router();
const path = require('path');
const multer=require('multer')
const validations = require('../middleware/validationUser');
const userController = require ('../controllers/userController');
const guestMiddleware = require ('../middleware/guestMiddleware');
const authMiddleware = require ('../middleware/authMiddleware');

const uploadFile = require('../middleware/multerPerfil');

let storage=multer.diskStorage({
    destination:(req,file,callback)=>{
        let folder=path.join(__dirname,'../../public/images/imagesPerfil');
        callback(null,folder);
    },
    filename:(req, file, callback)=>{
        let imageName= "user-"+Date.now()+path.extname(file.originalname);
        callback(null, imageName);
    }
})

let upload=multer({storage:storage});


router.get('/register',userController.registro)

//Procesar el registro
//router.post('/register', uploadFile.single('imagesPerfil'), validations,userController);

router.get('/login',userController.login);

//Procesar el login
//router.post('/login',userController);

router.get("/list",userController.list);
router.post("/list",userController.list);

module.exports=router
