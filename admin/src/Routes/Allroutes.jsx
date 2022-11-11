import React from 'react';
import { Route, Routes } from "react-router-dom"
import Cars from './Cars';
import Dashboard from './Dashboard';
import Flights from './Flights';
import Stays from './Stays';
import Users from './Users';

function Allroutes(props) {
    return (
         <Routes>
            <Route path="/" element={<Dashboard/>}/>
            <Route path="/users" element={<Users/>}/>
            <Route path="/cars" element={<Cars/>}/>
            <Route path="/flights" element={<Flights/>}/>
            <Route path="/stays" element={<Stays/>}/>
         </Routes>
    );
}

export default Allroutes;