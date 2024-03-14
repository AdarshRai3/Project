import {ObjectId} from 'mongodb';
import {getDb} from '../config/database.connection.js';
import bcrypt from 'bcrypt';

class UserRepository{
   async signUp(newUser)
   {
    try{
        const hashedPassword = await bcrypt.hash(newUser.password,10);
        newUser.password = hashedPassword;

    }catch(err){
        throw new error ('Database Error');
    }
   }

   async signIn(email,password)
   {
    try{
        const user = await getDb().collection('users').findOne({email:email});
        if(!user){
            throw new Error('User not found');
        }
        const isMatch = await bcrypt.compare(password,user.password);
        if(!isMatch){
            throw new Error('Invalid Credentials');
        }
        return user;
    }catch(err){
        throw new Error('Database Error');
    }
  }
}