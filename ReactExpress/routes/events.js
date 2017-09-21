import express from 'express';
import authenticate from '../middlewares/authenticate';

let router = express.Router();
/*from server side point of view we want to make sure that requests is coming from authenticated users*/
//authenticate acts as a middleware for authentication verify
router.post('/', authenticate,(req,res) => {
    res.status(201).json ({ success: true});
});

export default router;