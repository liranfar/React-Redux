import jwt from 'jsonwebtoken';
import config from "../config";
import User from '../models/user';
//the middleware function
//next is the callback function that calls the next function is the chain
export default function authenticate(req,res,next) {
    const authorizationHeader = req.headers['authorization'];
    let token;
    if(authorizationHeader) {
        token = authorizationHeader.split(' ')[1];
    }
    //console.log(token);
    if( token ) {
        jwt.verify(token,config.jwtSecret,(err,decoded) => {
           if(err){
               //in case we have wrong jwt token ( edited or curropted (
               res.status(401).json({ error: 'Failed to authenticate'});
           } else {
               User.query({
                   where: { id: decoded.id},
                   select: ['email','id','username']
               }).fetch()
                   .then( user => {

                       if(!user) {
                           res.status(404).json( { error: 'No such user'});
                       }
                        //assign a new variable to req
                       req.currentUser = user;
                       next();

                   });
           }
        });
    }else {
        res.status(403).json({
           error: 'No token provided'
        });
    }
}