const fs = require('fs');
const path = require('path');

const productsFilePath = path.join(__dirname, '../data/products.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));


const productsControllers={
    productCart: (req,res)=>{
        res.render('productCart')
    },
    productDetalle: (req,res)=>{
        let id = req.params.id
		let product = products.find(product => product.id == id)
		res.render('productDetail', {product})
    
    },
    product:(req,res)=>{
        res.render('products')
    },
    servicios:(req,res)=>{
        res.render('services')
    },
    tienda:(req,res)=>{
        let users=products;
    
        
        res.render('shop',{'users':users});
    },
    
    blog:(req,res)=>{
        res.render('blog')
     },

    create:(req,res)=>{
         res.render('productsCreate')
     },
     store:(req,res)=>{
        let newProduct = {
            id: products[products.length - 1].id + 1,
            ...req.body,
            image :req.file.filename
        };
         let productsNews = [...products, newProduct]
        fs.writeFileSync(productsFilePath, JSON.stringify(productsNews, null, ' '));
        res.redirect('/shop');

     },

     edicion:(req,res)=>{
        let id = req.params.id
		let edit = products.find(product => product.id == id)
        res.render('productEdit',{edit})
     },
     
     update: (req, res) => {
		let id = req.params.id;
		let productToEdit = products.find(product => product.id == id)
     
        productToEdit = {
			id: productToEdit.id,
			...req.body,
			image:req.filename
		};


     let newProducts = products.map(product => {
        if (product.id == productToEdit.id) {
            return product = {...productToEdit};
        }
        return product;
    })

    fs.writeFileSync(productsFilePath, JSON.stringify(newProducts, null, ' '));
    res.redirect('/shop');
},

}


module.exports=productsControllers