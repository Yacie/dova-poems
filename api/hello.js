/*module.exports = (req, res) => {
  const { name = 'World' } = req.query
  res.status(200).send(`Hello ${name}!`)
}*/

ps = (req,res)=>{
	//connect to mongodb dova
	const mongoose = require('mongoose');
	mongoose.connect(process.env.MONGODB_URI || config.mongoUrl, { 
			useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: false 
		}, ()=>{
		console.log('DOVA connection has been madef');
  	res.status(200).json({ichoo:process.env.MONGODB_URI})
	})
	.catch(err => {
		console.error('App starting error:', err.stack);
		process.exit(1);
	});
}

module.exports = ps;