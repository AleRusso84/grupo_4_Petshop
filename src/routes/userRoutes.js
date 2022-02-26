const express = require('express'); //requerimos express
const router = express.Router();
const path = require('path');
const multer=require('multer')
//const validations = require('../middleware/validationUser');
const userController = require ('../controllers/userController');
const guestMiddleware = require ('../middleware/guestMiddleware');
const userMiddleware = require ('../middleware/userMiddleware');


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

//Mostrar el formulario de registro
router.get('/register',guestMiddleware,userController.registro)

//Procesar el registro
router.post('/',guestMiddleware,upload.single('imagesPerfil'),userController.store)

//router.get('/login',userMiddleware,userController.login);

//Procesar el login
//router.post('/login',userMiddleware,userController.authenticate);

//router.get("/list",userController.list);
//router.post("/list",userController.list);



//Mostramos el formulario de login
router.get('/login',guestMiddleware,userController.login)
//hacer el post de formulario de login
router.post('/login',guestMiddleware,userController.authenticate)

//logout
router.post('/logout',userMiddleware,userController.logout)

router.get('/profile', userMiddleware,userController.profile);

module.exports=router
