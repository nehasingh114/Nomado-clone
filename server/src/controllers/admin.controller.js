const User = require('../models/users.model.js');
const Token = require('../models/tokens.model.js');
const jwt = require('jsonwebtoken');
require('dotenv').config();

const tokenSecretKey = process.env.ADMIN_TOKEN;

const adminLogin = async (req, res) => {
    const { email, password } = req.body;
    try {
        const admin = await User.findOne({ email, password });
        if (admin.role !== 'admin') {
            return res.status(401).send({ message: 'Unauthenticated' })
        }
        const token = jwt.sign({ email, role: admin.role }, tokenSecretKey);
        admin.delete('password')
        return res.send({ message: "Login success.", admin, token })
    }
    catch (e) {
        return res.status(404).send({ message: 'Unauthenticated' })
    }
}
module.exports = { adminLogin };