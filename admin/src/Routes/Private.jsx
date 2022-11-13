
import { Box, Heading } from '@chakra-ui/react';
import React, { useContext } from 'react';
import {  useNavigate } from 'react-router-dom';
import { AdminData } from '../Context/AdminDataContext';

function Private({children}) {
   const {adata}=useContext(AdminData)
   const Navigate=useNavigate()
   const token=localStorage.getItem("Nomadot")
    if(adata.role==="admin" && token ){
        return children
    }else if(!token){
        window.location.replace('https://nomadotravelers.netlify.app/signin')
    }else{
        return (
            <Box w="60%" m="auto" mt="300px" textAlign="center">
                <Heading>404 UnAuthorized</Heading>
            </Box>
         );
    }
    
}

export default Private;