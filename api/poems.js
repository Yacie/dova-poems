import {connectToDatabase} from './lib/database'

module.exports = async (req, res)=>{
  if(req.method === "GET"){
    try { const db = await connectToDatabase();
      const collection = await db.collection('poems');
      const poems = await collection.find({}).toArray();
      res.status(200).json({poems});
    } catch (err) {
    	console.log(err)
    }
  }
}