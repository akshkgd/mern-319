const express = require('express')
const ejs =  require('ejs')
const bodyParser = require('body-parser')
const mongoose = require('mongoose');
const session = require('express-session');
const mongoDbSession = require('connect-mongodb-session')(session);
const bcrypt = require('bcrypt')
// const router = express.Router();

mongoose.connect('mongodb+srv://ashish:codekaro123@codekaro.3w4zgb6.mongodb.net/?retryWrites=true&w=majority').then(()=>{
    console.log('MongoDB is Connected!!')
})

// import routes and modules
const generalRouter = require('./routes/general');
const authRouter = require('./routes/auth');
const adminRouter = require('./routes/admin');
const userRouter = require('./routes/user');
const Users = require('./model/User');

const app = express();
// sessions setup
const store = new mongoDbSession({
    uri: 'mongodb+srv://ashish:codekaro123@codekaro.3w4zgb6.mongodb.net/?retryWrites=true&w=majority',
    collection: 'sessions'
})
app.use(session({
    secret: 'codekaro secret code',
    resave: false,
    saveUninitialized: false,
    store: store
}))


app.set('view engine', 'ejs')
app.use(express.static('public'))
app.use(bodyParser.urlencoded({extended:true}))
app.use(generalRouter);
app.use(adminRouter);
app.use(authRouter)
app.use(userRouter)
app.listen(3000, ()=>{
    console.log('server running on port 3000')
})