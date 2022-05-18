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


// list: async (req, res) => {
//     const products = await db.Product.findAll({
//         order: [["id", "ASC"]],
//         include: [{ association: "product_category" }],
//     });

//     const categoryProducts = async (catId) => {
//         const products = await db.Product.findAll({
//             where: {
//                 categoryId: catId,
//             },
//         });
//         return products;
//     };

//     const count = await db.Product.count();
//     const consoleCount = await categoryProducts(1);
//     const gamesCount = await categoryProducts(2);
//     const accesoriesCount = await categoryProducts(3);
//     const retroCount = await categoryProducts(4);

//     const countByCategory = {
//         consoles: consoleCount.length,
//         games: gamesCount.length,
//         accesories: accesoriesCount.length,
//         retro: retroCount.length,
//     };

//     products.forEach((product) =>
//         product.setDataValue("detail", "api/products/" + product.id)
//     );

//     res.json({
//         meta: {
//             status: 200,
//             count,
//             countByCategory,
//             url: "/api/products",
//         },
//         data: products,
//     });
// },
// find: async (req, res) => {
//     const products = await db.Product.findByPk(req.params.id, {
//         include: [{ association: "product_category" }],
//     });

//     if (products !== null) {
//         products.setDataValue(
//             "product-image",
//             "images/products/" + products.image
//         );
//     }

//     res.json(products);
// },

// count: async (req, res) => {
//     const count = await db.Product.count();

//     res.json({
//         meta: {
//             count,
//         },
//         count,
//     });
// },

// totalPrice: async (req, res) => {
//     const products = await db.Product.findAll({});
//     let totalPrice = 0;

//     for (let i = 0; i < products.length; i++) {
//         totalPrice += products[i].price;
//     }

//     res.json({
//         meta: {
//             totalPrice,
//         },
//         totalPrice,
//     });
// },
