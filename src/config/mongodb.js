import {MongoClient} from 'mongodb';
import dotenv from 'dotenv';

dotenv.config();
const url = process.env.DB_URL;

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