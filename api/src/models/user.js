export default (sequelize, DataTypes) => {
    const User = sequelize.define("user", {
      userId: {
        type: DataTypes.INTEGER,
        unique: true,
        primaryKey: true,
        autoIncrement: true,
      },
      cognitoId: {
        type: DataTypes.STRING,
      },
    });
  
    return User;
  };
  