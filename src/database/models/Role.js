module.exports = (sequelize, dataTypes) =>{
    let alias = "Role";
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
        tableName : "roles",
        timestamps: true,
        createdAt: "created_at",
        updatedAt: "updated_at",
        
    }
    
    const Role = sequelize.define (alias,cols,config);

    Role.associate = function(models){
        
        Role.hasMany(models.User, {
            as: "users",
            foreignKey: "roles_id"
        })
    
    }

    return Role;
}