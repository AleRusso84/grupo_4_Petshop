module.exports = (sequelize, dataTypes) => {
    let alias = "Category";
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
      
    };
    let config = {
      tableName: "categories",
      timestamps: false,   
      
    };
    const Category = sequelize.define(alias, cols, config);
  
    Category.associate = function (models) {
      Category.hasmany(models.Product, {
              as: "Product",
              foreignKey: "category_id"
          })
       }
  
    return Category;
}