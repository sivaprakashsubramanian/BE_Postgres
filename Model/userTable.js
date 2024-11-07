const userDB = require("../Config");
// const sequelize=require(sequelize)
const {DataTypes}=require('sequelize')
const User=userDB.define('users',{
    firstName:{
      type:DataTypes.STRING,
      allowNull:false
    },
    rollNo:{
      type:DataTypes.STRING,
      allowNull:false
    },
    extraInfo:{
      type:DataTypes.JSON,
      allowNull:false
    },
    application:{
      type:DataTypes.STRING,
      allowNull:true
    }
  });
  module.exports=User;