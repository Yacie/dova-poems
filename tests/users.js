import {connectToDatabase} from '../lib/database'

module.exports = async (req, res)=>{
	if(req.method === "GET"){
		const db = await connectToDatabase();

		const collection = await db.collection('users');
		const users = await collection.find({}).toArray();
		res.status(200).json({users});
	}
}