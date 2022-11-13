import { Box, Heading } from '@chakra-ui/react';
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

function Sidebar(props) {
 const Navigate=useNavigate()
    const handleLogout=()=>{
        localStorage.removeItem("Nomadot");
        Navigate("https://www.forbes.com/wheels/news/best-selling-cars-suvs-pickups-2020/")
    }



    return (
        <Box display={{base:"none",md:"none",lg:"block"}} w="18%" position="fixed" left="0" top="0"  backgroundColor={"#0E1525"} color="white" h="100vh">
        <Heading size="lg" pt="20px" pl="10px" pb="70px" fontWeight="400">Nomado, Admin</Heading>
        
        <Link to="/">
        <Box pl="40px"  pb="15px"   display="flex" alignItems="center" gap="10px">
        <i className="fa-solid fa-house"></i>
        <Heading size="md" fontWeight="400">Dashboard</Heading>
        </Box>
        </Link>

        <Link to="/users">
        <Box pl="40px"  pb="15px"   display="flex" alignItems="center" gap="10px">
        <i className="fa-solid fa-user-plus" ></i>
        <Heading size="md" fontWeight="400">Users</Heading>
        </Box>
        </Link>
        <Link to="/stays">
        <Box pl="40px"  pb="15px"  display="flex" alignItems="center" gap="10px">
        <i className="fa-solid fa-hotel"></i>
        <Heading size="md" fontWeight="400">Stays</Heading>
        </Box>
        </Link>
        <Link to="/cars">
        <Box pl="40px"  pb="15px"   display="flex" alignItems="center" gap="10px">
        <i className="fa-solid fa-taxi"></i>
        <Heading size="md" fontWeight="400">Cars</Heading>
        </Box>
        </Link>
        <Link to="/flights">
        <Box pl="40px"  pb="15px"   display="flex" alignItems="center" gap="10px">
        <i className="fa-solid fa-plane-departure"></i>
        <Heading size="md" fontWeight="400">Flights</Heading>
        </Box>
        </Link>

       

        
        <Box pl="40px"  pb="15px" onClick={handleLogout}  display="flex" alignItems="center" gap="10px">
        <i className="fa-solid fa-right-from-bracket"></i>
        <Heading size="md" fontWeight="400">Logout</Heading>
        </Box>
        
        
       
    </Box>
    );
}

export default Sidebar;