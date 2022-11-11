const express = require('express');
const cors = require('cors');
require('dotenv').config()

const connectDB = require('./connectDB/connectDB.js');
const PORT = process.env.PORT || 8080;
const userRouter = require('./routes/users.router.js');
const hotelRouter = require('./routes/hotels.router.js');
const searchRouter = require('./routes/search.router.js');
const hotelPhotosRouter = require('./routes/hotelPhotos.router.js');
const bookHotelRouter = require('./routes/bookedHotels.router.js');
const adminRouter = require('./routes/admin.router.js')

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api/users', userRouter);

app.use('/api/hotels', hotelRouter);

app.use('/api/search', searchRouter);

app.use('/api/hotelphotos', hotelPhotosRouter);

app.use('/api/bookhotel', bookHotelRouter);

app.use('/api/admin', adminRouter);

app.get('/', async (req, res) => {
    res.sendFile(__dirname + '/utils/index.html');
})

connectDB().then(() => {
    app.listen(PORT, () => {
        console.log(`Server is running on PORT ${PORT}`)
    })
})
