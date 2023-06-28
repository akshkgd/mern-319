import express from 'express';
import mongoose from 'mongoose';
import ejs from 'ejs';
import bodyParser from 'body-parser';
import session from 'express-session';
import cors from 'cors';
import bcrypt from 'bcrypt'
import MongoDBSession from 'connect-mongodb-session';
const mongoDbSession = MongoDBSession(session);
// const mongoDbSession = require('connect-mongodb-session')(session)
const app = express();
mongoose.connect('mongodb+srv://codekaro:codekaro123@codekaro.3w4zgb6.mongodb.net/?retryWrites=true&w=majority').then(() => {
    console.log('MongoDB is connected!')
})

// adding sessions to database
const store = new mongoDbSession({
    uri: 'mongodb+srv://codekaro:codekaro123@codekaro.3w4zgb6.mongodb.net/?retryWrites=true&w=majority',
    collection: 'sessions'
})

app.use(session({
    secret: 'this is top secret',
    resave: false,
    saveUninitialized: true,
    store: store,
}))

app.set('view engine', 'ejs');
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
// app.use(bodyParser.json)
app.use(cors())
app.use(express.static('public'))
// schema
const userSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, unique: true, required: true },
    password: { type: String },
    addedBy: { type: String },
})
// model
const User = mongoose.model('users', userSchema);


// middlewares
const isAuth = (req, res, next) => {
    if (req.session.isAuth == true) {
        next()
    }
    else {
        res.redirect('/security')
    }
}
//routes
app.get('/', (req, res) => {
    res.render('index', {req: req})
})
app.get("/add", isAuth, (req, res) => {
    res.render('add', { addedBy: req.session.user.email, req:req })
})
app.post('/save-user', (req, res) => {
    let { name, email, addedBy } = req.body;
    console.log(name, email);
    let data = new User({
        name: name,
        email: email,
        addedBy: addedBy,
    })
    data.save();
    res.redirect('/users')
})

app.post('/delete', async (req, res) => {
    let { email } = req.body;
    let data = await User.deleteOne({ email: email })
    res.redirect('/users')
})
app.get('/security', (req,res)=>{
    res.render('security', {req: req})
})
app.get("/users", isAuth, async (req, res) => {
    req.session.test = 'codekaro';
    let auth = req.session.user;
    let data = await User.find({ addedBy: auth.email });
    res.render('users', { users: data, req: req, email: auth.email })
})
app.post("/edit", async (req, res) => {
    let { email } = req.body;
    let data = await User.findOne({ email: email });
    res.render('edit', { user: data, })
})

app.post("/update", async (req, res) => {
    let { name, email, oldEmail } = req.body;
    let data = await User.updateOne(
        { email: oldEmail },
        {
            $set: {
                name: name,
                email: email
            }
        })
    res.redirect('/users')
})



// authentication

app.get('/register', (req, res) => {
    res.render('register', {req: req})
})

app.get('/login', (req, res) => {
    res.render('login', {req: req})
})

app.post('/register', async (req, res) => {
    let { name, email, password } = req.body;
    let data = new User({
        name: name,
        email: email,
        password: await bcrypt.hash(password, 10)
    })
    data.save();
    res.redirect('/login')

})
app.post('/auth', async (req, res) => {
    let { email, password } = req.body;
    let user = await User.findOne({ email: email })
    if (!user) {
        res.json('user does not exist!')
    }
    else if (user) {
        let isPasswordValid = await bcrypt.compare(password, user.password);
        if (isPasswordValid) {
            req.session.isAuth = true;
            req.session.user = user;
            res.redirect('/users', )
        }
        else {
            res.json('incorrect password!')
        }
    }
    else {
        res.json('something went wrong')
    }
})

app.get('/logout', (req,res)=>{
    req.session.destroy()
    res.redirect('/')
})

// api calls
app.get('/api-users', async (req, res) => {
    let users = await User.find();
    res.json(users)
})
app.post('/api-add-user', (req, res) => {
    let { name, email } = req.body;
    console.log(name, email);
    let data = new User({
        name: name,
        email: email,
    })
    data.save();
    res.json('success');
})

app.post('/test', (req, res) => {
    res.json('node is connected with react now')
})




// add new user
const addUser = async () => {
    let data = new User({
        name: 'yash goel',
        email: 'yash@gmail.com'
    })
    data.save();
    console.log('User added!')
}
// addUser()

// reading data from database
const findUser = async () => {
    let data = await User.find({ name: 'bhavna' });
    console.log(data);
}
// findUser()

// delete the user
const deleteUser = async () => {
    let data = await User.deleteOne({ email: 'ashish@gmail.com' })
    console.log(data)
}
// deleteUser();


// update user
const updateUser = async () => {
    let data = await User.updateOne(
        { email: 'yash@gmail.com' },
        {
            $set: {
                name: 'Yash Agrawal'
            }
        })
}
// updateUser()
app.listen(3000, () => {
    console.log('server running on port 3000??')
})