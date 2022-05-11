const { body }= require('express-validator');
const db = require('../database/models');

const validation=[

    
    body('email').notEmpty().withMessage('Debes ingresar un E-mail').bail()
    .isEmail().withMessage('Debes escribir un formato de correo válido')
    // .bail()
    // .custom(
    //      async(placeholder)=>{
    //          if(!await db.User.findOne({where:{placeholder}})){
    //              return Promise.reject();
    //          }
    //          return Promise.resolve()
    //      }
    //  ).withMessage('El email no es correcto')
]

module.exports = validation;