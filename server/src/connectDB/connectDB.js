const mongoose = require('mongoose');
require('dotenv').config();

const MONGODB_URL = process.env.MONGODB_URL;

const connectDB = () => {
    return mongoose.connect(MONGODB_URL)
}

module.exports = connectDB