const Sequelize = require('sequelize');

const connection = new Sequelize('quickquiz', 'root', '12345', {
	host:'localhost',
	dialect: 'mysql'
});


module.exports = connection;