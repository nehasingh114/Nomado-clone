import { Route, Routes } from "react-router-dom"
import { Hotels } from "../Pages/Hotels"

export const AllRoutes=()=>{
    return (
        <Routes>
            <Route path="/hotels" element={<Hotels/>}/>
        </Routes>
    )
}