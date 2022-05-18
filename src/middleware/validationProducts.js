const {body} = require('express-validator');
const path = require('path');

const validations = [
    // Nombre del producto
    body('name').notEmpty().withMessage('Este campo no puede estar vacio').bail()
    .isLength({min: 5}).withMessage('Debe tener minimo 5 caracteres'),

    // Categorias
    body('category').notEmpty().withMessage('Seleccione una opcion'),
    
    body('category1').notEmpty().withMessage('Seleccione una opcion'),

    // Descripcion
    body('description').notEmpty().withMessage('Este campo no puede estar vacio').bail()
    .isLength({min:20}).withMessage('Debe tener minimo 20 caracteres'),
    
    // Imagen
    body('image').custom((value, { req }) => {
        let file = req.file;
        let acceptedExtensions = ['.jpg', '.png', '.webp'];
        
        if (file) {
            let fileExtension = path.extname(file.originalname);
            if (!acceptedExtensions.includes(fileExtension)) {
            throw new Error(`Las extensiones de archivo permitidas son ${acceptedExtensions.join(', ')}`);
            }
        } 
            
        
        
        return true;
    })
]

module.exports =validations;