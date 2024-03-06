const express = require('express')
const adminRouter = express.Router();
const Users = require('../model/User');
const Package = require('../model/Packages')

adminRouter.get('/users', async(req,res)=>{
    let users = await Users.find();
    res.render('admin/users', {users: users});
})

adminRouter.post('/delete-user', async(req,res)=>{
    let email = req.body.email;
    let user =await  Users.deleteOne({email: email})
    res.redirect('/users');
})

adminRouter.post('/edit-user', async(req,res)=>{
    let email = req.body.email;
    let user = await Users.findOne({email: email})
    res.render('admin/user', {user,user})
})



adminRouter.get('/add-package', async(req,res)=>{
    res.render('admin/addPackage');

})
adminRouter.post('/store-package', async(req,res)=>{
    let {title, price, img, desc} = req.body;
    let package = new Package({
        title: title,
        price: price,
        img: img,
        desc: desc,
    })
    await package.save();
    res.redirect('/add-package')

})
module.exports = adminRouter;