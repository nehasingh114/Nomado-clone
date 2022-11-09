const express = require("express");
const { createUser, loginUser, logoutUser } = require("../controllers/users.controller");

const app = express.Router();

app.post('/signup', createUser);

app.post('/login', loginUser);

app.post('/logout', logoutUser);

module.exports = app;