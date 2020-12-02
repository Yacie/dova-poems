const url = require('url');
const MongoClient = require('mongodb').MongoClient;

//Create cached connection variable
let cacheDb = null;

//MongoDB connection function [single parameter]

async function connectToDatabase(uri){
	//if db already cached, use that 1
	if(cacheDb){
		console.log("Use existing connection");
		return cacheDb
	}
	try {
		//else
		const client = await MongoClient.connect(uri, {
			useNewUrlParser: true,
			useUnifiedTopology: true
		});
	
		//Select db thru the conn
		const db = await client.db(url.parse(uri).pathname.substr(1));
		console.log('New connection to',process.env.MONGODB_DB,'database');
	
		//cache the db conn & return the conn
		cacheDb = db;
		return db;
	} catch (err){
		console.log(err)
	}
}

//Main exported function
module.exports = async(req, res)=>{
	try{
		//Get a db conn, cached or otherwise
		const db = await connectToDatabase(process.env.MONGODB_URI);

		//select the users' collection
		const collection = await db.collection('users');

		//further process selected users
		const users = await collection.find({}).toArray();
		res.status(200).json({users});
	} catch (err) {
		console.log(err)
	}

}