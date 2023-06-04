import express from 'express';
import mongoose from 'mongoose';
import ejs from 'ejs';
import bodyParser from 'body-parser';
const app = express();
mongoose.connect('mongodb+srv://codekaro:codekaro123@codekaro.3w4zgb6.mongodb.net/?retryWrites=true&w=majority').then(()=>{
    console.log('MongoDB is connected!')
})
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static('public'))
// schema
const userSchema = new mongoose.Schema({
    name: {type: String, required:true},
    email: {type: String, unique: true, required: true},

})
// model
const User = mongoose.model('users', userSchema);

//routes
app.get('/', (req,res)=>{
    res.render('index')
}) 
app.get("/add", (req,res)=>{
    res.render('add')
})
app.post('/save-user', (req,res)=>{
    let {name, email} = req.body;
    let data = new User({
        name: name,
        email: email,
    })
    data.save();
    res.redirect('/users')
})

app.post('/delete', async(req,res)=>{
    let {email} = req.body;
    let data = await User.deleteOne({email: email})
    res.redirect('/users')
})

app.get("/users", async (req,res)=>{
        let data = await User.find({});
        res.render('users', {users : data})
})
app.post("/edit", async (req,res)=>{
    let {email} = req.body;
    let data = await User.findOne({email: email});
    res.render('edit', {user : data})
})

app.post("/update", async(req,res)=>{
    let {name, email, oldEmail} = req.body;
    let data = await User.updateOne(
        {email: oldEmail},
        {
            $set: {
                name: name,
                email: email
            }
        })
        res.redirect('/users')
})


// api calls
app.get('/api-users', async(req,res)=>{
    let users = await User.find();
    res.json(users)
})





// add new user
const addUser = async ()=>{
    let data = new User({
        name: 'yash goel',
        email: 'yash@gmail.com'
    })
    data.save();
    console.log('User added!')
}
// addUser()

// reading data from database
const findUser = async ()=>{
    let data = await User.find({name: 'bhavna'});
    console.log(data);
}
// findUser()

// delete the user
const deleteUser = async ()=>{
    let data = await User.deleteOne({email: 'ashish@gmail.com'})
    console.log(data)
}
// deleteUser();


// update user
const updateUser = async ()=>{
    let data = await User.updateOne(
        {email: 'yash@gmail.com'},
        {
            $set: {
                name: 'Yash Agrawal'
            }
        })
}
updateUser()
app.listen(3000, ()=>{
    console.log('server running on port 3000')
})