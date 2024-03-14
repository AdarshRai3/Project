import {MongoClient} from 'mongodb';
import dotenv from 'dotenv';

dotenv.config();
const url = process.env.DB_URL;
const dbName = 'usersDB';

let client;

const connectToMongoDB = async()=>{
    try{
    client = await MongoClient.connect(url);
    const db = client.db();
    return db;
   }
   catch(err){
       console.log(err);
   }
}

const getDb =()=>{
    if(!client){
        throw new Error('Database not connected');
    }

    return client.dB(dbName)
}

export default {connectToMongoDB,getDb};