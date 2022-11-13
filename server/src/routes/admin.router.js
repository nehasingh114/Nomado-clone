const express = require('express');
const { adminLogin, getUsers, deleteUser, getHotels, deleteHotel, addHotel, getAdminData, updateHotel, getFlights, deleteFlight, updateFlight, addFlight } = require('../controllers/admin.controller');

const app = express.Router();

app.post('/login', adminLogin);

app.get('/users', getUsers)

app.delete('/users/:id', deleteUser)

app.get('/hotels', getHotels)

app.delete('/hotels/:id', deleteHotel);

app.post('/hotels/add', addHotel);

app.patch('/hotels/update/:id', updateHotel);

app.post('/redirect', getAdminData);

app.get('/flights',getFlights);

app.delete('/flights/:id',deleteFlight);

app.post('/flights/add',addFlight);

app.patch('/flights/update/:id',updateFlight);

module.exports = app;