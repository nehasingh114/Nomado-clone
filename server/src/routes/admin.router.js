const express = require('express');
const { adminLogin,getUsers } = require('../controllers/admin.controller');

const app = express.Router();

app.post('/login', adminLogin);

app.get('/users', getUsers)

module.exports = app;