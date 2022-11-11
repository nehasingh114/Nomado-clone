const express = require('express');
const { getHotelPhotos } = require('../controllers/hotelPhotos.controller');

const app = express.Router();

app.get('/', getHotelPhotos);

module.exports = app;