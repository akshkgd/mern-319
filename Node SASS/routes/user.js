const express = require('express')
const userRouter = express.Router();
const Payments = require('../model/Payment');
const Razorpay = require('razorpay')

userRouter.get('/home', (req,res)=>{
    res.render('user/home')
})



userRouter.get('/checkout', (req,res)=>{

    const options = {
        amount: 1000,
        currency: 'INR',
        receipt: Math.floor(Math.random()*10000),
    }


    var instance = new Razorpay({ key_id: 'rzp_test_7avFgYRE5tHm9F', key_secret: 'WG9pnSj8rAdNvpUvmR2hmJ0x' })
    instance.orders.create(options, (err, order)=>{
        if(err){
            console.log(err);
            return;
        }
        res.render('user/checkout', {order:order})
    })

userRouter.post('/payment', async(req,res)=>{
    var instance = new Razorpay({ key_id: 'rzp_live_N8UGdqxvec83A2', key_secret: 'Gjjr9VLiBaONhuAgLNh0FTE1' })
    const response = await instance.payments.fetch(req.body.razorpay_payment_id);
    res.json({response})
})
   
})


// admin routes

userRouter.get('/dashboard', (req,res)=>{
    res.render('admin/dashboard')
})

userRouter.get('/user', (req,res)=>{
    res.render('admin/user')
})



module.exports = userRouter;