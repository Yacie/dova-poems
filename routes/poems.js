const express = require('express');
const router = express.Router();
const Poem = require('../models/poems');
const ichoo = require('../api/hello')

/* GET all poems */
router.get('/', (req, res, next)=>{
	Poem.find(req.query)
  .then((poems,im)=>{
    res.statusCode=200;
    res.setHeader('Content-Type', 'application/json');
    res.json({poems,im:ichoo});
    res.send({im:ichoo})
	}, (err) => next(err))
  .catch((err) => next(err));
});

module.exports = router;