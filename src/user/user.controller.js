import UserModel from "./user.model.js"
import jwt from 'jsonwebtoken';

export default class UserController{
    signUp(request,response){
        const {
            name ,
            email,
            password,
            type,
        }=req.body;
        const newUser = UserModel.SignUp(
            name,
            email,
            password,
            type
        );
        response.status(201).send(newUser);
    }

    signIn(request,response){
        const result = User.Model.SignIn(
            req.body.email,
            re.body.password
        )
        if(!result){
            return response
            .status(400)
            .send('Incorrect Credentials')
        }
        else{
            
            const token = jwt.signIn(
                {
                    userID: result.id,
                    email:result.email,
                },
                'PMy/Iyg3EUY98gSW+S/yA7J68PmeWsDAIWB756A6fwM',
                {
                    expiresIn:'1h'
                }
            )
            return response.status(200).send(token);
        }
    }
}