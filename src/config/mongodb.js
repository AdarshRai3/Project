import {MongoClient} from 'mongodb';

const url = 'mongodb://localhost:27017/ecomDb';

const connectToMongoDB = async()=>{
    try{
    const client = await MongoClient.connect(url);
    const db = client.db();
    return db;
   }
   catch(err){
       console.log(err);
   }
}
export default connectToMongoDB;