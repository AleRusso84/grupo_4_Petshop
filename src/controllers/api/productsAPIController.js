const db = require("../../database/models");

const productsApiController = {
    list: async (req, res) => {
        const products = await db.Product.findAll({
            order: [["id", "ASC"]],
            include: [{ association: "categorysMascotas1" }],
        });

        const categoryproductos = async (catId) => {
            const products = await db.Product.findAll({
                where: {
                    categoryId: catId,
                },
            });
            return products;
        };

        const count = await db.Product.count();
        const perrosCount = await categoryproductos(1);
        const gatosCount = await categoryproductos(2);
        const avesCount = await categoryproductos(3);
        const pecesCount = await categoryproductos(4);

        const countByCategory = {
            perros: perrosCount.length,
            gatos: gatosCount.length,
            aves: avesCount.length,
            peces: pecesCount.length,
        };

        products.forEach((product) =>
            product.setDataValue("detail", "api/products/" + product.id)
        );

        res.json({
            meta: {
                status: 200,
                count,
                countByCategory,
                url: "/api/products",
            },
            data: products,
        });
    },
    find: async (req, res) => {
        const products = await db.Product.findByPk(req.params.id, {
            include: [{ association: "categorysMascotas1" }],
        });

        if (products !== null) {
            products.setDataValue(
                "product-",
                "images/productos/" + products.image
            );
        }

        res.json(products);
    },

    count: async (req, res) => {
        const count = await db.Product.count();

        res.json({
            meta: {
                count,
            },
            count,
        });
    },

    totalPrice: async (req, res) => {
        const products = await db.Product.findAll({});
        let totalPrice = 0;

        for (let i = 0; i < products.length; i++) {
            totalPrice += products[i].price;
        }

        res.json({
            meta: {
                totalPrice,
            },
            totalPrice,
        });
    },
}

module.exports = productsApiController;