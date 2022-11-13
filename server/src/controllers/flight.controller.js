const Flight = require('../models/flight.model.js');

const getFlights = async (req, res) => {
    try {
        const flights = await Flight.aggregate(
            [{ $sample: { size: 20 } }]
        );
        res.send({ message: "Success", flights });
    }
    catch (e) {
        res.send({ message: "Error", error: e })
    }
}

const getFlightById = async (req, res) => {
    const { id } = req.params;
    try {
        const flight = await Flight.findById(id);
        res.send({ message: "Success", flight });
    }
    catch (e) {
        res.send({ message: "Error", error: e })
    }
}

module.exports = { getFlights, getFlightById }