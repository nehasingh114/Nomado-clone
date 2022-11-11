const User = require('../models/users.model.js');
const Token = require('../models/tokens.model.js');
const jwt = require('jsonwebtoken');
require('dotenv').config();

const tokenSecretKey = process.env.TOKEN_SECRET_KEY;
const tokenExpiresIn = process.env.TOKEN_EXPIRES_IN;

const createUser = async (req, res) => {
    try {
        const { email, firstName, lastName, password, keepSigned } = req.body;
        const user = await User.create({ email, firstName, lastName, password });
        user.delete('password')
        if (!keepSigned) {
            const token = jwt.sign({ email }, tokenSecretKey, { expiresIn: tokenExpiresIn })
            return res.send({ message: "Signup success.", user, token })
        }
        else {
            const token = jwt.sign({ email }, tokenSecretKey)
            return res.send({ message: "Signup success.", user, token })
        }
    }
    catch (e) {
        return res.send({ message: "Signup error.", error: e })
    }
}

const loginUser = async (req, res) => {
    try {
        const { email, password, keepSigned } = req.body;
        const user = await User.findOne({ email, password });
        user.delete('password')
        if (!user) {
            return res.status(404).send({ message: "Invalid credentials.", error: e })
        }
        if (!keepSigned) {
            const token = jwt.sign({ email }, tokenSecretKey, { expiresIn: tokenExpiresIn })
            return res.send({ message: "Login success.", user, token })
        }
        else {
            const token = jwt.sign({ email }, tokenSecretKey)
            return res.send({ message: "Login success.", user, token })
        }
    }
    catch (e) {
        return res.status(404).send({ message: "Invalid credentials.", error: e })
    }
}

const logoutUser = async (req, res) => {
    try {
        const { token } = req.body;
        await Token.create({ token });
        res.send({ message: "Logged out." })
    }
    catch (e) {
        res.send({ message: "Logout error.", error: e })
    }
}

module.exports = { createUser, loginUser, logoutUser }