import express from 'express';
import validateInput from "../shared/validation";
import bcrypt from 'bcrypt';
import User from '../models/user';

let router = express.Router();

router.post('/',(req,res) => {

    /*console.log(req);*/

    const { errors,  isValid} = validateInput(req.body);
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
            .then(user => res.json({ success: true}))
            .catch(err => res.status(500).json({ error: err}));
    }
});

export default router;