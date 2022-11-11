const mongoose = require('mongoose');

const bookHotelSchema = new mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: "user" },
    hotel: { type: mongoose.Schema.Types.ObjectId, ref: "hotel" },
    roomType: {},
    checkin: { type: String },
    checkout: { type: String },
    price: { type: Number },
    rooms: [],
    travellerName: { type: String },
    travellerNumber: { type: Number },
    days: { type: Number, default: 1 },
    refundable: { type: Boolean, default: false }
})
const BookHotel = mongoose.model('bookedhotel', bookHotelSchema)

module.exports = BookHotel;