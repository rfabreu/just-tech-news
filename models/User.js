const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

// Create User Model
class User extends Model { }

// Define table columns and configuration
User.init(
    {
        // TABLE COLUMN DEFINITIONS WILL GO HERE
        // define an ID column
        id: {
            // use the special Sequelize DataTypes object to provide what type of data it is
            type: DataTypes.INTEGER,
            // this is the equivalent of SQL's `NOT NULL` option
            allowNull: false,
            // instruct that this is the Primary Key
            primaryKey: true,
            // turn on auto increment
            autoIncrement: true
        },
        // define a username column
        username: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        // define an email address column
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            // prevent duplicate email values
            unique: true,
            // if allowNull is set to false, we can run the data through validators before creating the table data
            validate: {
                isEmail: true
            }
        },
        // define a password column
        password: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                // enforce minimum password length of 4 characters
                len: [4]
            }
        }
    },
    {
        // TABLE CONFIGURATION OPTIONS WILL GO HERE

        // pass in imported sequelize connection (the direct connection to the database)
        sequelize,
        // prevent automatically creating createdAt/updatedAt timestamp fields
        timestamps: false,
        // prevent pluralization of database table name
        freezeTableName: true,
        // enforce underscores instead of camel-casing
        underscored: true,
        // set model to lowercase in the database
        modelName: 'user'
    }
);

module.exports = User;