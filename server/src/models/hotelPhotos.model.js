const mongoose = require('mongoose');

const hotelPhotosSchema = new mongoose.Schema({

})
const HotelPhoto = mongoose.model('hotelphoto', hotelPhotosSchema)

module.exports = HotelPhoto;