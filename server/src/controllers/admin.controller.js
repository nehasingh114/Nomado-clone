const User = require('../models/users.model.js');
const Token = require('../models/tokens.model.js');
const jwt = require('jsonwebtoken');
require('dotenv').config();

const tokenSecretKey = process.env.ADMIN_TOKEN;

const adminLogin = async (req, res) => {
    const { email, password } = req.body;
    try {
        const admin = await User.findOne({ email, password,role:"admin" });
        console.log(admin)
        console.log(1)
        const token = jwt.sign({ email, role: admin.role }, tokenSecretKey);
        console.log(2)
        
        console.log(3,admin);
        return res.send({ message: "Login success.", admin, token })
    }
    catch (e) {
        return res.status(404).send({ message: 'Unauthenticated',e })
    }
}

const getUsers = async(req,res) => {
    const {token} = req.headers;
    try{
        const admin = jwt.verify(token,tokenSecretKey);
        const users = await User.find({},{password:0});
        return res.send({message:"Success",data:users})
    }
    catch(e){
        return res.status(401).send({message:"Error",e})
    }
}
module.exports = { adminLogin,getUsers };