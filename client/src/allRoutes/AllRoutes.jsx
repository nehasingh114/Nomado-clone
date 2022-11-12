import { Route, Routes } from "react-router-dom"
import { BookHotel } from "../Pages/BookHotel"
import { ConfirmPayment } from "../Pages/ConfirmPayment"
import { Home } from "../Pages/Home"
import { HotelCheckout } from "../Pages/HotelCheckout"
import { Hotels } from "../Pages/Hotels"
import { SignIn } from "../Pages/SignIn"
import { Trip } from "../Pages/Trips"
import { PrivateRoute } from "./PrivateRoute"

export const AllRoutes = () => {
    return (
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/signin' element={<SignIn />} />
            <Route path="/hotels" element={<Hotels />} />
            <Route path='/hotels/:id' element={<BookHotel />} />
            <Route path='/checkout/bookhotel'
                element={<PrivateRoute>
                    <HotelCheckout />
                </PrivateRoute>} />
            <Route path='/confirmpayment/stays' element={<ConfirmPayment />} />
            <Route path='/trips' element={<Trip />} />
        </Routes>
    )
}
