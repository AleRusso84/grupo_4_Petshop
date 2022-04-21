module.exports = (sequelize, dataTypes) =>{
    let alias = "Usercategory";
    let cols = {

        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull:false
        },

        name: {
            type: dataTypes.STRING,
            allowNull:false
        }
    
    };
    
    let config = {
        tableName : "usercategory",
        timestamps: false
        // createdAt: "created_at",
        // updatedAt: "updated_at",
        
    }
    
    const Usercategory = sequelize.define (alias,cols,config);

    Usercategory.associate = function(models){
        
        Usercategory.hasMany(models.User, {
            as: "users",
            foreignKey: "userCategory_id"
        });
        


    
    }

    return Usercategory;
}