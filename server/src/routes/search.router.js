const express = require('express');
const { getStays } = require('../controllers/search.controller');

const app = express.Router();

app.get('/stays', getStays);

module.exports = app;