const express = require('express');
const { adminLogin } = require('../controllers/admin.controller');

const app = express.Router();

app.post('/login', adminLogin);

module.exports = app;