module.exports = (sequelize, dataTypes) => {
    let alias = "User"; 
    let cols = {
      id: {
        type: dataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      firstname: {
        type: dataTypes.STRING,
        allowNull: false,
      },
      lastname: {
        type: dataTypes.STRING,
        allowNull: false,
      },
      email: {
        type: dataTypes.STRING,
        allowNull: false,
      },
      image: {
        type: dataTypes.STRING,
        allowNull: false,
      },
      password: {
        type: dataTypes.STRING,
        allowNull: false,
    },
      roles_id: {
        type: dataTypes.INTEGER,
        allowNull: false,
        
    }
    };
  
    let config = {
      tableName: "users",  
      timestamps: true,
      createdAt: "created_at",
      updatedAt: "updated_at",
      deletedAt: false,
    };
    const User = sequelize.define(alias, cols, config);

    User.associate = function(models){
        
        User.belongsTo(models.Role, {
            as: "roles",
            foreignKey: "roles_id"
        })
    }
  
    return User;
  };