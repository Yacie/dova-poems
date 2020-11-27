const express = require('express');
const router = express.Router();
const Poem = require('../models/poems');

/* GET all poems */
router.get('/', (req, res, next)=>{
	Poem.find(req.query)
  .then((poems)=>{
    res.statusCode=200;
    res.setHeader('Content-Type', 'application/json');
    res.json({poems});
	}, (err) => next(err))
  .catch((err) => next(err));
});

module.exports = router;