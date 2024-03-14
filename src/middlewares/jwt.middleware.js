import jwt from 'jsonwebtoken'
import dotenv from 'dotenv'
dotenv.config();

const jwtAuth =(request,response,next)=>{
const token = request.headers['authorization'];
    console.log(token);
    if(!token){
        response.status(401).send('Unauthorized');
    }

    try{
        const payload = jwt.verify(token,process.env.JWT_SECRET);
        console.log(payload);

    }catch(err){
        console.log(err);
        response.status(401).send('Unauthorized');
    }
    next();
};

export default jwtAuth;