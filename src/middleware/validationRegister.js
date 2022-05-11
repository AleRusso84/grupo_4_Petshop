const { body }= require('express-validator');
const db = require('../database/models');

const validation=[

    body('firstName').notEmpty().withMessage('Debes ingresar un Nombre'),
    body('lastName').notEmpty().withMessage('Debes ingresar un Apellido'),
    body('password').notEmpty().withMessage('Debes ingresar una Contraseña'),
    body('email').notEmpty().withMessage('Debes ingresar un E-mail').bail()
    .isEmail().withMessage('Debes escribir un formato de correo válido')
    // .bail()
    // .custom(
    //     async(value)=>{
    //         if(await db.User.findOne({where:{value}})){
    //             return Promise.reject();
    //         }
    //         return Promise.resolve()
    //     }
    // ).withMessage('El email que ingreso ya')
]

module.exports = validation;