const Hotel = require('../models/hotels.model.js')

const getHotels = async (req, res) => {
    try {
        const hotels = await Hotel.aggregate(
            [{ $sample: { size: 20 } }]
        );
        res.send(hotels);
    }
    catch (e) {
        res.send({ message: "Error", error: e })
    }
}

const getSingleHotel = async (req, res) => {
    const { id } = req.params;
    try {
        const hotel = await Hotel.findById(id);
        res.send(hotel);
    }
    catch (e) {
        res.send({ message: "Error", error: e })
    }
}

module.exports = { getHotels, getSingleHotel }