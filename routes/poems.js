const express = require('express');
const router = express.Router();
const Poem = require('../models/poems');
const bodyParser = require('body-parser');

/* GET all poems */
router.get('/', (req, res, next)=>{
	Poem.find(req.query)
  .populate('comments.author') 
  .then((poems)=>{//Params: heading subheading body //error,
    res.statusCode(200);
    res.setHeader('Content-Type', 'application/json');
    res.json({poems});
	}, (err) => next(err))
  .catch((err) => next(err));
});

//get a single poem details
router.get('/:id', (req, res, next)=>{
	Poem.findById(req.params.id)
  .populate('comments.author')
  .then((poem)=>{//Params: heading subheading body //error, 
    res.statusCode = 200;
    res.json({poem});
	}, (error) => next(error))
  .catch((error) => next(error));
})

module.exports = router;