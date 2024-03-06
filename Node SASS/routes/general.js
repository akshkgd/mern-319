const express = require('express')
const generalRouter = express.Router();


generalRouter.get('/', (req,res)=>{
    res.render('index')
})

generalRouter.get('/about', (req,res)=>{
    res.render('about')
})

module.exports = generalRouter;