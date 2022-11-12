const express = require('express');
const { bookHotel, getBookedHotels } = require('../controllers/bookedHotels.controller.js');

const app = express.Router();

app.post('/', bookHotel);

app.get('/user/:id',getBookedHotels)

module.exports = app;