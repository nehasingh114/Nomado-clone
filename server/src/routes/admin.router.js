const express = require('express');
const { adminLogin, getUsers, deleteUser, getHotels, deleteHotel, addHotel, getAdminData, updateHotel } = require('../controllers/admin.controller');

const app = express.Router();

app.post('/login', adminLogin);

app.get('/users', getUsers)

app.delete('/users/:id', deleteUser)

app.get('/hotels', getHotels)

app.delete('/hotels/:id', deleteHotel);

app.post('/hotels/add', addHotel);

app.patch('/hotels/update/:id', updateHotel);

app.post('/redirect', getAdminData);

module.exports = app;