const Sequelize = require('sequelize');
const connection = require('../database/database.js');

const Ranking = connection.define('ranking', {
	name:{
		type: Sequelize.STRING,
		allowNull: false
	},
	email:{
		type: Sequelize.STRING,
		allowNull: false
	},
	score:{
		type: Sequelize.INTEGER,
		allowNull: false
	}
});

//Category.sync({ force: true });
module.exports = Ranking;