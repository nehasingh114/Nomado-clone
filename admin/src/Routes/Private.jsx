
import { Box, Heading } from '@chakra-ui/react';
import React, { useContext } from 'react';
import { AdminData } from '../Context/AdminDataContext';

function Private({children}) {
   const {adata}=useContext(AdminData)
   console.log(adata)
    if(adata.role==="admin"){
        return children
    }else{
        return (
            <Box w="60%" m="auto" mt="300px" textAlign="center">
                <Heading>404 UnAuthorized</Heading>
            </Box>
         );
    }
    
}

export default Private;