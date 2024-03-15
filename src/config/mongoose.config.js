import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();
const URI = process.env.DB_URI;

export const connectToMongoDb = async()=>{
    try{
        await mongoose.connect(URI);
        console.log('Connected to MongoDB');
    }
    catch(err){
        console.log(err);
    }
}