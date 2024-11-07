const userDB = require("../Config");
// const sequelize=require(sequelize)
const {DataTypes}=require('sequelize')
const files=userDB.define('userFiles',{
    FileName:{
        type:DataTypes.STRING,
        allowNull:false
    },
    FilePath:{
        type:DataTypes.STRING,
        allowNull:false
    },
    FileType:{
        type:DataTypes.STRING,
        allowNull:false
    }

})
module.exports=files;