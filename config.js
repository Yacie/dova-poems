module.exports = {
  'mongoUrl' : 'mongodb://localhost:27017/dova'
}
//Local mongoDB url
//  'mongoUrl' : 'mongodb://localhost:27017/dova'


//Online mongoDB url
//'mongoUrl' : 'mongodb+srv://dev1:UFTMN0@cluster0.deroy.mongodb.net/dova'

/* Atlas recommended driver configs
const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://dev1:UFTMN0@cluster0.deroy.mongodb.net/dova";
const client = new MongoClient(uri, { useNewUrlParser: true });
client.connect(err => {
  const collection = client.db("test").collection("devices");
  // perform actions on the collection object
  client.close();
});
*/