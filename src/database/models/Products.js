module.exports = (sequelize, dataTypes) => {
    let alias = "Product"; 
    let cols = {
      id: {
        type: dataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      name: {
        type: dataTypes.STRING,
        allowNull: false,
      },
      description: {
        type: dataTypes.TEXT,
        allowNull: false,
      },
      price: {
        type: dataTypes.DECIMAL,
        allowNull: false,
      },
      discount: {
        type: dataTypes.INTEGER,
        allowNull: false,
      },
      image: {
        type: dataTypes.STRING,
        allowNull: false,
      },
  
      category_id: {
      type: dataTypes.INTEGER,
      allowNull: false,
      },
    };
    let config = {
      tableName : "products",
      timestamps: true,
      createdAt: "created_at",
      updatedAt: "updated_at",
      deletedAt: false,
    };
    const Product = sequelize.define(alias, cols, config);
  
    Product.associate = function (models) {
      Product.belongsTo(models.Productcategory, {
        as: "category",
        foreignKey: "category_id",
      });
    };
  
    return Product;
  };