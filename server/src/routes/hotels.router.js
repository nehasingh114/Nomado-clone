const express = require('express');
const { getHotels } = require('../controllers/hotels.controller');

const app = express.Router();

app.get('/', getHotels);

module.exports = app;