import express from 'express'
import expressEjsLayouts from 'express-ejs-layouts'
import ejs from 'ejs'
import session from 'express-session'
import cookieParser from 'cookie-parser'

const app = express();

app.get('/',(req,res)=>{
    try{
        res.send("Welcome to e-commerce store API");

    }catch(err){
        console.log(err);
    }
})

app.listen(3000,()=>{
    console.log("server is running on port 3000");
})