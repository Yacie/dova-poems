import {connectToDatabase} from '../lib/database'

module.exports = async (req, res)=>{
	if(req.method === "GET"){
		const db = await connectToDatabase();

		const collection = await db.collection('users');
		const users = await collection.find({}).toArray();
		res.status(200).json({users});
	}


/*
vercel.json eg configs{
  "routes": [
    { "src": "/custom-page", "headers": {"cache-control": "s-maxage=1000"}, "dest": "/index.html" },
    { "src": "/api", "dest": "/my-api.js" },
    { "src": "/users", "methods": ["POST"], "dest": "/users-api.js" },
    { "src": "/users/(?<id>[^/]*)", "dest": "/users-api.js?id=$id" },
    { "src": "/.*", "dest": "https://my-old-site.com"},
    { "src": "/legacy", "status": 404},
    { "src": "/redirect", "status": 308, "headers": { "Location": "https://example.com/" } }
  ]
}


,
    { "src": "/(.*)", "dest": "/" }
    "MONGODB_URI": "@mongo-url",
  */