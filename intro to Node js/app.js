import express from 'express';
const ejs = require('ejs');
const bodyParser = require('body-parser')
const App = express();
App.set('view engine', 'ejs')
App.use(bodyParser.urlencoded({extended:true}))
const users = []
// routes 
App.get('/', (req,res)=>{
    res.render('index');
})
App.get('/about', (req,res)=>{
    res.render('about')
})
App.post('/submit-data', (req,res)=>{
        let name = req.body.name;
        let email = req.body.email;
        let tempUser = {
            name: name,
            email: email,
        }
        users.push(tempUser);
        res.render('success', {name: name, email: email})
})
App.get('/users', (req,res)=>{
    res.render('users', {users: users})
})

App.get('*', (req,res)=>{
    res.send('<h1>404, Page not found<h1>')
})


App.listen(3000, ()=>{
    console.log('server is running on port 3000')
})
