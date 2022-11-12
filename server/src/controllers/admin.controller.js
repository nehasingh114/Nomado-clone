const User = require('../models/users.model.js');
const Admin = require('../models/admin.model.js');
const Token = require('../models/tokens.model.js');
const Hotel = require('../models/hotels.model.js')
const jwt = require('jsonwebtoken');
require('dotenv').config();

const tokenSecretKey = process.env.ADMIN_TOKEN;

const adminLogin = async (req, res) => {
    const { email, password } = req.body;
    try {
        const admin = await Admin.findOne({ email, password });
        const token = jwt.sign({ email, role: admin.role }, tokenSecretKey);
        return res.send({ message: "Login success.", admin, token });
    }
    catch (e) {
        return res.status(404).send({ message: 'Unauthenticated', e })
    }
}

const getUsers = async (req, res) => {
    const { token } = req.headers;
    try {
        const admin = jwt.verify(token, tokenSecretKey);
        const users = await User.find({}, { password: 0 });
        return res.send({ message: "Success", data: users })
    }
    catch (e) {
        return res.status(401).send({ message: "Error", e })
    }
}

const deleteUser = async (req, res) => {
    const { token } = req.headers;
    const { id } = req.params;
    try {
        const admin = jwt.verify(token, tokenSecretKey);
        const user = await User.findByIdAndDelete(id);
        return res.send({ message: "Success", data: user })
    }
    catch (e) {
        return res.status(401).send({ message: "Error", e })
    }
}

const getHotels = async (req, res) => {
    try {
        const hotels = await Hotel.find();
        return res.send({ message: "Success", data: hotels })
    }
    catch (e) {
        return res.status(401).send({ message: "Error", e })
    }
}

const deleteHotel = async (req, res) => {
    const { token } = req.headers;
    const { id } = req.params;
    try {
        const admin = jwt.verify(token, tokenSecretKey);
        const hotel = await Hotel.findByIdAndDelete(id);
        return res.send({ message: "Success", data: hotel })
    }
    catch (e) {
        return res.status(401).send({ message: "Error", e })
    }
}

const addHotel = async (req, res) => {
    const { data } = req.body;
    const { token } = req.headers;
    try {
        const admin = jwt.verify(token, tokenSecretKey);
        const hotel = await Hotel.create(data);
        return res.send({ message: "Success", data: hotel })
    }
    catch (e) {
        return res.status(401).send({ message: "Error", e })
    }
}

const updateHotel = async (req, res) => {
    const { data } = req.body;
    const { token } = req.headers;
    const { id } = req.params;
    try {
        const admin = jwt.verify(token, tokenSecretKey);
        const hotel = await Hotel.findOneAndUpdate({ _id:id }, data, { new: true });
        return res.send({ message: "Success", data: hotel })
    }
    catch (e) {
        return res.status(401).send({ message: "Error", e })
    }
}

const getAdminData = async (req, res) => {
    const { token } = req.headers;
    try {
        const data = jwt.verify(token, tokenSecretKey);
        const admin = await Admin.findOne({ email: data.email });
        return res.send({ message: "Success", data: admin })
    }
    catch (e) {
        return res.status(401).send({ message: "Error", e })
    }

}
module.exports = { adminLogin, getUsers, deleteUser, getHotels, deleteHotel, addHotel, getAdminData ,updateHotel};