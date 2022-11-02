// imports Sequelize constructor from library
const Sequelize = require('sequelize');
require('dotenv').config();

// create connection to database, pass in MySQL information for username and password
// remember to set environment variables for this when testing
const sequelize = new Sequelize(process.env.MYSQL_DBNAME, process.env.MYSQL_USERNAME, process.env.MYSQL_PASSWORD, {
    host: process.env.MYSQL_HOST,
    dialect: 'mysql',
    port: process.env.MYSQL_PORT
});

module.exports = sequelize;