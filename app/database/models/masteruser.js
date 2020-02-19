module.exports = (sequelize, DataTypes) => {
    let alias = 'masterusers';
      let columns = {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true,
      },
      name: DataTypes.STRING,
      surname: DataTypes.STRING,
      gender: DataTypes.STRING,
      typeDocument: DataTypes.STRING,
      document: DataTypes.STRING,
      telephone: DataTypes.INTEGER,
      email: DataTypes.STRING,
      street: DataTypes.STRING,
      city: DataTypes.STRING,
      CP: DataTypes.STRING,
      province: DataTypes.STRING,
      userID: DataTypes.INTEGER,
      avatarName: DataTypes.STRING,
      state: DataTypes.INTEGER,
      password: DataTypes.STRING,
  
  };
  let config = {
  tableName: 'masterusers',
  timestamps: false, // createdAt - updatedAt
  };
    const masteruser = sequelize.define(alias, columns, config);
  
    masteruser.associate = function(models) {
      // associations can be defined here
      masteruser.belongsTo(models.users, {
        as: 'users',
        foreignKey: 'userID'
      });
    };
    return masteruser;
  };
  