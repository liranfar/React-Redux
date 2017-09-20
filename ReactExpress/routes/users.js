import express from 'express';
import validateInput from "../shared/validation";
let router = express.Router();

router.post('/',(req,res) => {

    /*console.log(req);*/

    const { errors,  isValid} = validateInput(req.body);
    /*console.log(req.body);*/

    if(!isValid) {
        res.status(400).json(errors);
    }
    else {
        res.json({ success: true});
    }
});

export default router;