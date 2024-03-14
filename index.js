import express from 'express'
import expressEjsLayouts from 'express-ejs-layouts'
import ejs from 'ejs'
import session from 'express-session'
import cookieParser from 'cookie-parser'
import productRouter from './src/product/product.routes.js'
import userRouter from './src/user/user.routes.js'


const app = express();
const Port = 3500;

app.use('/api/products',productRouter);
app.use('/api/users',userRouter);
app.get('/',(req,res)=>{
    try{
        res.send("Welcome to e-commerce store API");

    }catch(err){
        console.log(err);
    }
})

app.listen(Port,()=>{
    console.log("server is running on port 3500");
})