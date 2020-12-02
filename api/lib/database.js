const MongoClient = require('mongodb').MongoClient;

let cachedDb = null;

export const connectToDatabase = async()=>{
	if(cachedDb){
		console.log("Use existing connection");
		return Promise.resolve(cachedDb);
	}
	else{
		return MongoClient.connect(process.env.MONGODB_URI || 'mongodb+srv://dev1:UFTMN0@cluster0.deroy.mongodb.net/', {
			native_parser: true, 
			useNewUrlParser: true,useUnifiedTopology: true
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