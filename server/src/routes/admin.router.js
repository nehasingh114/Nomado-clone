const express = require('express');
const { adminLogin, getUsers, deleteUser, getHotels, deleteHotel } = require('../controllers/admin.controller');

const app = express.Router();

app.post('/login', adminLogin);

app.get('/users', getUsers)

app.delete('/users/:id', deleteUser)

app.get('/hotels', getHotels)

app.delete('/hotels/:id', deleteHotel)

module.exports = app;