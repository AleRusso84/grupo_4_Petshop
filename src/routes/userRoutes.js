const express = require('express'); //requerimos express
const router = express.Router();
//const path = require('path');
//const validations = require('../middleware/validationUser');
const userController = require ('../controllers/userController');
const guestMiddleware = require ('../middleware/guestMiddleware');
const authMiddleware = require ('../middleware/authMiddleware');

//const uploadFile = require('../middleware/multerPerfil');


router.get('/register',userController.registro)

router.get('/login',userController.login)

router.get("/list",userController.list)

module.exports=router
