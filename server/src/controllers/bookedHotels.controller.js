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

module.exports = { bookHotel };