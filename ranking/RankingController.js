const express = require('express');
const router = express.Router();
const Ranking = require('./Ranking.js');

router.get('/ranking/new', (req,res)=>{
	res.render('index.ejs');
});

router.post('/ranking/save', (req,res)=>{
	let name = req.body.name;
	let email = req.body.email;
	if(!name || !email){
		res.redirect('/ranking/new');
	}else{
		Ranking.create({
			name: name,
			email: email,
			score: 0
		}).then(()=>{
			res.redirect('/ranking/new');
		})
	}
});
module.exports = router;