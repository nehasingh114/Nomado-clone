const mongoose = require('mongoose');

const adminSchema = new mongoose.Schema({
    email: { type: String, required: true, unique: true },
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    password: { type: String, required: true },
    role:{type:String,default:"admin"}
})

const Admin = mongoose.model('admin', adminSchema);

module.exports = Admin;