import { Route, Routes } from "react-router-dom";
import { BookHotel } from "../Pages/BookHotel";
import { ConfirmPayment } from "../Pages/ConfirmPayment";
import { Flights } from "../Pages/Flights";
import { HotelCheckout } from "../Pages/HotelCheckout";
import { Hotels } from "../Pages/Hotels";
import { SignIn } from "../Pages/SignIn";
import Signup from "../Pages/signup";
import { Trip } from "../Pages/Trips";
import { PrivateRoute } from "./PrivateRoute";
import Flight from "../Pages/Flight/Flight"
import Homepage from "../Pages/Homepage/Homepage"
import Stays from "../Pages/stays/Stays"

export const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/hotels" element={<Hotels />} />
      <Route path="/stays" element={<Stays />} />
      <Route path="/flight" element={<Flight />} />
      <Route path="/signin" element={<SignIn />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/hotels/:id" element={<BookHotel />} />
      <Route path="/flights" element={<Flights />} />
      <Route
        path="/checkout/bookhotel"
        element={
          <PrivateRoute>
            <HotelCheckout />
          </PrivateRoute>
        }
      />
      <Route path="/confirmpayment/stays" element={<ConfirmPayment />} />
      <Route path="/trips" element={<Trip />} />
    </Routes>
  );
};


