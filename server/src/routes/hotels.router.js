const express = require('express');
const { getHotels, getSingleHotel } = require('../controllers/hotels.controller');

const app = express.Router();

app.get('/', getHotels);

app.get('/:id', getSingleHotel)

module.exports = app;