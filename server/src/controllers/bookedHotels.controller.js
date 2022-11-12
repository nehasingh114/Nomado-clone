const BookHotel = require('../models/bookedHotels.model.js');

const bookHotel = async (req, res) => {
    const { user, hotel, roomType, checkin, checkout, price, rooms, travellerName, travellerNumber, days, refundable, id } = req.body;
    try {
        const temp = id ? await BookHotel.findById(id) : "";
        if (temp) {
            return res.send({ message: "Booking success.", trip: temp })
        }
        const trip = await BookHotel.create({ user, hotel, roomType, checkin, checkout, price, rooms, travellerName, travellerNumber, days, refundable });
        res.send({ message: "Booking success.", trip })
    }
    catch (e) {
        res.send({ message: "Booking failure", e })
    }
}

const getBookedHotels = async (req, res) => {
    const { id } = req.params;
    try {
        const trips = await BookHotel.find({user:id}).populate({path:"hotel"});
        res.send({ message: "Success.", trips })
    }
    catch (e) {
        res.send({ message: "Failure", e })
    }
}

module.exports = { bookHotel, getBookedHotels };