const { Sequelize } = require('sequelize');
const userDB = new Sequelize('Movie', 'postgres', 'siva', {
    host: 'localhost',
    dialect: 'postgres'
  });
  module.exports=userDB;