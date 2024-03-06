const mongoose = require('mongoose');
const PackageSchema = new mongoose.Schema({
    title: {type: String, required: true},
    price: {type:Number, required: true,},
    desc: {type:String, required: true},
    img: {type: String, required:true}
})

module.exports = mongoose.model('packages', PackageSchema)