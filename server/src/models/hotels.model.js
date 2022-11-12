const mongoose = require('mongoose');

const hotelSchema = new mongoose.Schema({

}, { strict: false })
const Hotel = mongoose.model('hotel', hotelSchema)

module.exports = Hotel;