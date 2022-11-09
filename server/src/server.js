const express = require('express');
const cors = require('cors');
require('dotenv').config()

const connectDB = require('./connectDB/connectDB.js');
const PORT = process.env.PORT || 8080;
const userRouter = require('./routes/users.router.js');

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api/users', userRouter);

app.get('/', async (req, res) => {
    res.sendFile(__dirname + '/utils/index.html');
})

connectDB().then(() => {
    app.listen(PORT, () => {
        console.log(`Server is running on PORT ${PORT}`)
    })
})
