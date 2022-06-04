const express = require('express');
const session = require('express-session');
const app = express();
const Ranking = require('./Ranking.js');

app.use(session({secret:'limaoscarlima'}));

app.get('/ranking/new', (req,res)=>{
	res.render('new.ejs');
});

app.post('/ranking/save', (req,res)=>{
	let name = req.body.name;
	let email = req.body.email;
	nameuser = name; 
	if(!name || !email){
		res.redirect('/ranking/new');
	}else{
		req.session.name = name;
		Ranking.create({
			name: name,
			email: email,
			score: 0
		}).then(()=>{
			res.redirect('/ranking/quiz');
		});
	}
});

app.get('/ranking/quiz', (req,res)=>{
	res.render('quiz.ejs');
});

module.exports = app;