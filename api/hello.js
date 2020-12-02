/*module.exports = (req, res) => {
  const { name = 'World' } = req.query
  res.status(200).json({name:'Hello',name})
}*/
module.exports = (req,res)=>{
	const poems = require('../models/poems');

	//connect to mongodb dova
	const mongoose = require('mongoose');
	mongoose.connect(process.env.MONGODB_URI || 'mongodb+srv://dev1:UFTMN0@cluster0.deroy.mongodb.net/dova', { 
			useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: false 
		}, ()=>{
		//res.send('DOVA connection has been madef');
  	res.status(200).json({ichoo:process.env.MONGODB_URI,ini:'Ndapinda',poems:'musha'})
	})
	.catch(err => {
		console.error('App starting error:', err.stack);
		process.exit(1);
	});
}

/*
var mongoose=require('mongoose');
var db = require('../config/database');
// create an schema
var userSchema = new mongoose.Schema({
            fullName: String,
            emailAddress:String,
            city:String,
            country:String
        });
userTable=mongoose.model('users',userSchema);
        
module.exports={
     
     fetchData:function(callback){
        var userData=userTable.find({});
        userData.exec(function(err, data){
            if(err) throw err;
            return callback(data);
        })
        
     }
}
*/