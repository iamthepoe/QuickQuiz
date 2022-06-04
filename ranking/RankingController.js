const express = require('express');
const router = express.Router();
const Ranking = require('./Ranking.js');

router.get('/ranking/question', (req,res)=>{
	res.send('AAA');
});
module.exports = router;