import React from 'react';
import { Route, Routes } from "react-router-dom"
import Cars from './Cars';
import Dashboard from './Dashboard';
import Flights from './Flights';
import Loader from './Loader';
import Private from './Private';
import Stays from './Stays';
import Users from './Users';

function Allroutes(props) {
    return (
         <Routes>
            <Route path="/:token" element={<Loader/>}/>

            <Route path="/" element={<Private><Dashboard/></Private>}/>
            <Route path="/users" element={<Private><Users/></Private>}/>
            <Route path="/cars" element={<Private><Cars/></Private>}/>
            <Route path="/flights" element={<Private><Flights/></Private>}/>
            <Route path="/stays" element={<Private><Stays/></Private>}/>
         </Routes>
    );
}

export default Allroutes;