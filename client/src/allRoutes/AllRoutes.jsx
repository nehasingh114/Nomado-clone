import { Route, Routes } from "react-router-dom"
import Flight from "../Pages/Flight/Flight"
import Homepage from "../Pages/Homepage/Homepage"
import { Hotels } from "../Pages/Hotels"
import Stays from "../Pages/stays/Stays"

export const AllRoutes=()=>{
    return (
        <Routes>
            <Route path="/" element={<Homepage/>}/>
            <Route path="/hotels" element={<Hotels/>}/>
            <Route path="/stays"element={<Stays/>}/>
            <Route path="/flight"element={<Flight/>}/>
        </Routes>
    )
}