import express from 'express'
import expressEjsLayouts from 'express-ejs-layouts'
import ejs from 'ejs'
import session from 'express-session'
import cookieParser from 'cookie-parser'
import productRouter from './src/product/product.routes.js'
import userRouter from './src/user/user.routes.js'
import cartRouter from './src/cart/cart.routes.js'
import apiDocs from './swagger.json' assert {type: 'json'};
import cors from 'cors';
import connectToMongoDB from './src/config/mongodb.js'
import swagger from 'swagger-ui-express';


const app = express();
const Port = 3500;

app.use('/api/products',cors(),productRouter);
app.use('/api/users',userRouter);
app.use('/api/cart', cartRouter);

app.use(cors());
app.use('api/docs',swagger.serve ,swagger.setup(apiDocs));
app.use((req,res)=>{
    res.status(404).send("API not found.Please check our documentation for more information at localhost:3200/api-docs");
})
app.get('/',(req,res)=>{
    try{
        res.send("Welcome to e-commerce store API");

    }catch(err){
        console.log(err);
    }
})

app.listen(Port,()=>{
    console.log("server is running on port 3500");
    connectToMongoDB();
})