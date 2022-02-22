const fs = require('fs');
const path = require('path');
//const { validationResult} = require('express-validator');
//const bcrypt = require('bcryptjs');

const userController={
    registro: (req,res)=>{
        res.render('register')
    },

    login: (req,res)=>{
        res.render('login')
    },

    list:(req,res)=>{
        let users=[
            "dario",
            "moni",
            "Juan",
            "Pablo"
        ];
        
        res.render('list',{'users':users});
    }
}


module.exports=userController