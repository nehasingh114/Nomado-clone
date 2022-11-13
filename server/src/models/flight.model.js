const mongoose = require('mongoose');

const flightSchema = new mongoose.Schema({

}, { strict: false })
const Flight = mongoose.model('flight', flightSchema)

module.exports = Flight;