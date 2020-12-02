const MongoClient = require('mongodb').MongoClient;

let cachedDb = null;

export const connectToDatabase = async()=>{
	if(cachedDb){
		console.log("Use existing connection");
		return Promise.resolve(cachedDb);
	}
	else{
		return MongoClient.connect(process.env.MONGODB_URI2, {
			//native_parser: true, 
			useNewUrlParser: true,useUnifiedTopology: true,
			useCreateIndex: true,
			useFindAndModify: false 
		})
		.then((client)=>{
			let db = client.db(process.env.MONGODB_DB);
			console.log('New connection to',process.env.MONGODB_DB,'database');
			cachedDb = db;
			return cachedDb;
		})
		.catch((error)=>{
			console.log('Mongo connection error');
			console.log(error);
		})
	}
}



//connect to mongodb dova
/*const mongoose = require('mongoose');
mongoose.connect(process.env.MONGODB_URI || config.mongoUrl, { 
		useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: false 
	}, (err, db)=>{
	console.log('DOVA connection has been made');
})
.catch(err => {
	console.error('App starting error:', err.stack);
	process.exit(1);
});*/