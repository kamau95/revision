import express from 'express';


const app= express();
import{check, validationResult} from 'express-validator';

app.post('/submit', [
    check('name').isAlphanumeric(),
    check('age').isNumeric(),
    check('email').isEmail()
], (req, res)=>{
    const errors= validationResult(req);
    if(!errors.isEmpty()){
        return res.status(422).json({yourError: errors.array()})
    }
});
