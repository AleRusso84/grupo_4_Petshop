// ************ Require's ************
const express = require('express');
const router = express.Router();
const multer = require('multer');
const path = require('path')

// ************ Controller Require ************

const userController = require('../controllers/userController');
const guestRoute = require('../middleware/guestRoute');
const userRoute = require('../middleware/userRoute');
const validationsUser = require('../middleware/validationUser');
// ************ Multer ************
let storage2=multer.diskStorage({
    destination:(req,file,callback)=>{
        let folder=path.join(__dirname,'../../public/images/users');
        callback(null,folder);
    },
    filename:(req, file, callback)=>{
        let imageName= "user-"+Date.now()+path.extname(file.originalname);
        callback(null, imageName);
    }
})
let upload2 = multer({storage2});

//Mostrar el formulario para hacer el registro
router.get('/register',guestRoute,userController.register)

//hacer post del formulario de registro
router.post('/',upload2.single('image'),validationsUser,userController.store)

//Mostramos el formulario de login
router.get('/login',guestRoute,userController.login)
//hacer el post de formulario de login
router.post('/profile',guestRoute,userController.authenticate)

//logout
router.post('/logout',userRoute,userController.logout)

router.get('/profile',userRoute, userController.profile);

module.exports = router;