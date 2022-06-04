//importing dependencies
	const express = require('express');
	const app = express();
	const port = 8080;
	const bodyParser = require('body-parser');
	const connection = require('./database/database.js');
	const RankingController = require('./ranking/RankingController.js');
	const Ranking = require('./ranking/Ranking.js');
	
//View Engine
	app.set('view engine', 'ejs');

//Static
	app.use(express.static('public'));

//Body parser
	app.use(bodyParser.urlencoded({extended: false}));
	app.use(bodyParser.json());

//Database
	connection
		.authenticate()
		.then(() => {
			console.log("Successful connection.");
		})
		.catch((error)=>{
			console.log(error);
		});

app.use('/', RankingController);

app.get('/', (req,res)=>{
	res.send('Homepage');
});

app.listen(port, ()=>console.log('the server is running on port '+port));