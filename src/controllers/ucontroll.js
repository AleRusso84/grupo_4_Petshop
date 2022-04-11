const db = require("../database/models");
const fs = require("fs");
const path = require("path");
const { Op } = require("sequelize");
const {validationResult}=require('express-validator');


const productsControllers={


    productCart: function(req,res){
        res.render('productCart');
    },


    create:function (req,res){

        let categories = db.Category.findAll()

        Promise
        .all([categories, sizes])
        .then(
            function(responses){
                let category = responses[0];
                return res.render('creacionProducto',{category})
            })
            .catch(error=>console.log(error))
    },
    
    storage: async  (req,res)=>{
        let category = await db.Category.findAll();
        
        let imageUpload;
        if(!req.file){
            imageUpload = 'noImage.jpg'
        } else {
            imageUpload = req.file.filename
        }
        try{
            const validation = validationResult(req);
            
            if(validation.errors.length > 0){
    
                return res.render('creacionProducto',
                {
                    errors: validation.mapped(),
                    oldData: req.body,
                    category,
                });
            }; 
            db.Product.create({                                    
                    name: req.body.name,
                    price: req.body.price,
                    description:req.body.description,
                    image: imageUpload,
                    stock: req.body.stock,
                    brand: req.body.brand,
                    category_id: req.body.category_id, 
                    size_id:req.body.size_id               
                })
                .then(()=>
                {res.redirect ("/product/detail")
    
                })
                .catch(e=>console.log(e))
            
        }catch(e){
            console.log(e)
        }
       
    },

    destroy: function(req,res){

        db.Product.findByPk(req.params.id,{include:[{association: 'category'}]})
        .then((producto)=>{
            
            if(producto.image != 'noImage.jpg'){
            // Usamos try para poder verificar que la ruta funcione correctamente para la eliminación del archivo de imagen del producto
            try { 
                // Elimina la imagen y luego continúa la secuencia para borrar el producto de la db con destroy()
                fs.unlinkSync(path.resolve(__dirname+'../../../public/images/products')+'/'+producto.image)
            }
            catch(e){
                console.log(e)
            }
        }
        })
        .catch(e=>{
            console.log(e)
        })  

        db.Product.destroy({   
            include:[{association: 'category'}],
            where:{id : req.params.id}  
        })
        .then(()=>
            {res.redirect ("/product/detail")}
            )
            .catch(error=>console.log(error))
    },

     /*******metodo para listar y mostrar todos los productos*** */
    detail: (req,res)=>{

    if(req.query.category){
        db.Product.findAll({
            include:[{association: 'category'}],
            where: {category_id: req.query.category}
        })
        .then(products=>{
            let queryExists = 1;
            res.render('listadoProductosSQL',{products:products,queryExists:queryExists})
        } )      
            .catch(error=>console.log(error));
    } else {
        db.Product.findAll({
            include:[{association: 'category'}]
            
        })
        .then(products=>{
            let queryExists = 0;
            res.render('listadoProductosSQL',{products:products,queryExists:queryExists})
            } )      
            .catch(error=>console.log(error));
    }
    

        
        
    },

    view: (req,res)=>{

    db.Product.findByPk(req.params.id,{include:[{association: 'category'}]})
        
        .then(product=>{
            res.render('detalleSQL',{product:product})
        } )      
        .catch(error=>console.log(error));
            
    },

    edit: (req,res)=>{

        let categories = db.Category.findAll()
        let products = db.Product.findByPk(
            req.params.id,
            {include:
                [
                    {association: 'category'}, 
                ]
            })

        Promise
        .all([categories, products])
        .then(
            function(responses){
                let category = responses[0];
                let product = responses[1];
                return res.render('editProduct',{category,product})
            }
        )
        .catch(error=>console.log(error))       
    },

    editPost: function (req,res){

        db.Product.findByPk(
            req.params.id,
            {include:
                [
                    {association: 'category'}, 
                ]
            })

        .then(product =>
            {
                let imageUpload

                if(!req.file || !product.image){
                    imageUpload = 'noImage.jpg'
                } else {
                    imageUpload = req.file.filename
                }
                
                db.Product.update(
                {                                    
                    name: req.body.name,
                    price: req.body.price,
                    description: req.body.description,
                    image: imageUpload,
                    stock: req.body.stock,
                    brand: req.body.brand,
                    category_id: req.body.category_id          
                },
                {
                    where: {id : req.params.id}
                })
                .then(()=>
                {res.redirect ("/product/detail/"+req.params.id)}
                )
                .catch(error=>console.log(error))
        })
        .catch(error=>console.log(error))
    
        

    }
}
module.exports=productsControllers;