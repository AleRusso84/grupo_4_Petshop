const db = require("../../database/models");

const productsApiController = {
    list: async (req, res) => {
        const products = await db.Product.findAll({
            order: [["id", "ASC"]],
            include: [{ association: "categorysProducts1" }],
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
        const perros = await categoryproductos(1);
        const gatos = await categoryproductos(2);
        const aves = await categoryproductos(3);
        const peces = await categoryproductos(4);

        const countByCategory = {
            perros: perros.length,
            gatos: gatos.length,
            aves: aves.length,
            peces: peces.length,
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
            include: [{ association: "categorysProducts1" }],
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