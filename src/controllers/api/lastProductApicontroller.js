const DB = require("../../database/models");
const Op = DB.Sequelize.Op;

const lastProductsAPIController = {
  list: (req, res) => {
    DB.Product.findOne({where:{id:14}})
    .then(product=>{
        return res.status(200).json({
            data: product,
            status:200
        })

    })
  },
}


module.exports = lastProductsAPIController