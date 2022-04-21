const express = require("express")
const router = express.Router()
const multer=require('multer')
const path=require('path')

const productsControllers=require('../controllers/productsControllers')

let storage=multer.diskStorage({
    destination:(req,file,callback)=>{
        let folder=path.join(__dirname,'../../public/images/productos');
        callback(null,folder);
    },
    filename:(req, file, callback)=>{
        let imageName= "producto-"+Date.now()+path.extname(file.originalname);
        callback(null, imageName);
    }
})

let upload=multer({storage:storage});



router.get('/productCart', productsControllers.productCart)
router.get('/shop', productsControllers.tienda)

// Formulario de creacion y guardado
router.get('/products/create',productsControllers.create)
router.post('/products',upload.single('image'),productsControllers.store)

// // Detalle del Producto
router.get('/products/:id',productsControllers.productDetalle)

// // Edicion del Producto

router.get('/products/:id/edit', productsControllers.edicion)
router.put('/products/:id',upload.single('image'),productsControllers.update)


// router.get('/products',productsControllers.product)
// router.get('/services',productsControllers.servicios)

// router.get("/blog", productsControllers.blog)
// router.get("/blog_single", productsControllers.blog_single)

module.exports=router