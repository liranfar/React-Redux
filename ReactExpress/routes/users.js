import express from 'express';
import commonValidations from "../shared/validation";
import bcrypt from 'bcrypt';
import User from '../models/user';
import {isEmpty} from "lodash";
import config from "../config";
import jwt from "jsonwebtoken";

let router = express.Router();

function validateInput(data, otherValidations) {
    let { errors } = otherValidations(data);

    return User.query({
        where: {email: data.email},
        orWhere: { username: data.username }
    }).fetch().then(user => {

    if(user) {
        if(user.get('username') === data.username) {
            errors.username = 'There is a user with such username';
        }
        if(user.get('email') === data.email) {
            errors.email = 'There is a user with such email';
        }

    }
        return {
            errors,
            isValid: isEmpty(errors)
        };

    })


}


router.get('/:identifier', (req,res) => {
   User.query ({
       select: ['username','email'],
       where: { email: req.params.identifier },
       orWhere: {username: req.params.identifier}
   }).fetch().then(user => {
       res.json( { user } );
   });
});

router.post('/',(req,res) => {

    validateInput(req.body,commonValidations).then(({errors,isValid}) => {


    /*console.log(req);*/

    /*const { errors,  isValid} = validateInput(req.body);*/
    /*console.log(req.body);*/

    if(!isValid) {
        res.status(400).json(errors);
    }
    else {
        const {username,password,timezone,email} = req.body;
        const password_digest = bcrypt.hashSync(password,10);

        User.forge({
            username,timezone,email,password_digest
        },{hasTimestamps: true }).save()
            .then(user => {
                    const token = jwt.sign(
                        {
                        id: user.get('id'),
                        username: user.get('username')
                        },
                        config.jwtSecret
                    );

                res.json({success: true,
                          token });
                }
            )
            .catch(err => res.status(500).json({ error: err}));
        }
    });
});

export default router;