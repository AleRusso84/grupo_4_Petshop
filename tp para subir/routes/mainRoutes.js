const express = require("express")
const router = express.Router()

const mainControler = require("../controllers/mainControllers")

router.get("/", mainControler.index)
// falta el maincontroler . lo que sea 
// falta despues de la barra / la ruta 
router.get("/register", mainControler.register)

router.get("/login", mainControler.login)

module.exports = router