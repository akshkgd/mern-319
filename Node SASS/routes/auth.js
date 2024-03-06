const express = require('express')
const authRouter = express.Router();
const Users = require('../model/User');
const bcrypt = require('bcrypt')

authRouter.get('/login', (req,res)=>{
    res.render('login');
})

authRouter.get('/register', (req,res)=>{
    res.render('register')
})

authRouter.post('/add-user', async (req,res)=>{
    const {name, email, password} = req.body;
    const doesUserExist = await Users.findOne({email: email});
    console.log(doesUserExist)
    if(doesUserExist){
        res.redirect('/login');
    }
    else{
        const user = new Users({
            name: name,
            email: email,
            password: await bcrypt.hash(password, 10)
        })
        await user.save();
        res.redirect('/login') 
    }
    
})

authRouter.post('/auth', async(req,res)=>{
    const {email, password} = req.body;
    const doesUserExist = await Users.findOne({email: email});
    console.log(doesUserExist)
    if(doesUserExist){
        const isPasswordValid = await bcrypt.compare(password, doesUserExist.password);
        if(isPasswordValid){
            res.json({message: 'login successful'})
        }
        else{
            res.json({message: 'wrong password'})
        }
    }
    else{
        res.json({message: 'user does not exist!!'})
    }
})

module.exports = authRouter;