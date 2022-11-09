const mongoose = require('mongoose');

const hotelSchema = new mongoose.Schema({

})
const Hotel = mongoose.model('hotel', hotelSchema)

module.exports = Hotel;