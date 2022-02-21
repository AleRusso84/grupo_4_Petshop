const express = require("express")
const router = express.Router()

const userController=require('../controllers/userController')

router.get('/register',userController.registro)

router.get('/login',userController.login)

router.get("/list",userController.list)

module.exports=router
