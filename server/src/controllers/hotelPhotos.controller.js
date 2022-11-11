const HotelPhoto = require('../models/hotelPhotos.model.js')

const getHotelPhotos = async (req, res) => {
    try {
        const hotels = await HotelPhoto.aggregate(
            [{ $sample: { size: 35 } }]
        );
        res.send(hotels);
    }
    catch (e) {
        res.send({ message: "Error", error: e })
    }
}

module.exports = { getHotelPhotos }