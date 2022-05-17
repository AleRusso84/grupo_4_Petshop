const path = require('path');
const db = require('../../database/models');
const sequelize = db.sequelize;
const { Op } = require("sequelize");
const moment = require('moment');


//Aqui tienen otra forma de llamar a cada uno de los modelos
const Movies = db.Movie;
const Genres = db.Genre;
const Actors = db.Actor;


const productsAPIController = {
    list: (req,res) => {
        db.Product
        .findAll()
        .then(products =>{
            return res.json({
                total: products.length,
                data: products,
                status: 200
            })
        })
    },
    show: (req,res)=>{
        db.Product
           .findByPk(req.params.id)
           .then(product=>{
               return res.status(200).json({
                   data: product,
                   status:200
               })

           })

    },
    store: (req,res)=> {
        db.Product
           .create(req.body)
           .then(product => {
               return res.status(200).json({ 
                   data: product,
                   status: 200
               })
           })
    },
    delete:(req,res)=>{
        db.Product
           .destroy({
               where: {
                   id: req.params.id
               }
           })
            .then((response)=>{
                return res.json(response)
            })
    }
}


module.exports = productsAPIController;