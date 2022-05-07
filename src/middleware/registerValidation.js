const { check } = require("express-validator");
const db = require("../database/models");

const registerValidation = [
  check("firstName")
    .notEmpty()
    .withMessage("Debe completar el campo: Nombre")
    .bail()
    .isString()
    .withMessage("Debe utilizar caracteres alfanumericos")
    .bail()
    .isLength({ min: 3, max: 10 })
    .withMessage("El Nombre debe tener entre 3 y 10 caracteres")
    .bail(),
  check("lastName")
    .notEmpty()
    .withMessage("Debe completar el campo: Apellido")
    .bail()
    .isString()
    .withMessage("Debe utilizar caracteres alfanumericos")
    .bail()
    .isLength({ min: 3, max: 10 })
    .withMessage("El Apellido debe tener entre 3 y 10 caracteres")
    .bail(),
  check("profileImage")
    .custom((value, { req }) => {
      if (value && req.file) {
        return false;
      } else if (value || req.file) {
        return true;
      }
      return false;
    })
    .withMessage("Debe subir una imagen de perfil"),  
  check("email")
    .notEmpty()
    .withMessage("Debe ingresar un Email")
    .bail()
    .isEmail()
    .withMessage("Debe introducir un email valido")
    .bail()
    .custom( async (value) => {
      if (await db.User.findOne({ where: { email: value } })) {
        return Promise.reject();
      }
      return Promise.resolve();
    })
    .withMessage("El email que ingresó ya esta en uso"),
  check("password")
    .notEmpty()
    .withMessage("Debe ingresar una Contraseña")
    .bail()
    .isLength({ min: 5, max: 10 })
    .withMessage("La Contraseña debe tener entre 5 y 10 caracteres")
    .bail(),
];

module.exports = registerValidation;