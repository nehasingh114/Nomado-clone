const express = require('express');
const { bookHotel } = require('../controllers/bookedHotels.controller.js');

const app = express.Router();

app.post('/', bookHotel);

module.exports = app;