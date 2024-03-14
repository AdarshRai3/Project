import jwt from 'jsonwebtoken'

const jwtAuth =(request,response,next)=>{
const token = request.headers['authorization'];
    console.log(token);
    if(!token){
        response.status(401).send('Unauthorized');
    }

    try{
        const payload = jwt.verify(token,'PMy/Iyg3EUY98gSW+S/yA7J68PmeWsDAIWB756A6fwM');
        console.log(payload);

    }catch(err){
        console.log(err);
        response.status(401).send('Unauthorized');
    }
    next();
};

export default jwtAuth;